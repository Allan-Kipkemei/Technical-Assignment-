const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 4000; // Use process.env.PORT or default to 4000
const secretkey = crypto.randomBytes(64).toString("hex");
console.log(secretkey);

// Generate a random secret key

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's domain
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

// Connect to MongoDB using your provided URI
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello, world" });
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json({ message: "Sign up Success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to sign up",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign(
        {
          userID: user._id,
        },
        secretkey, // Use the generated secret key
        { expiresIn: "1hr" }
      );

      return res.status(200).json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/logout", (req, res) => {
  // Implement the JWT deletion
  // ...

  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

app.delete("/delete_account", async (req, res) => {
  try {
    const userId = req.user.ID;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
