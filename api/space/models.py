from django.db import models

# Create your models here.

class Student(models.Model):
    username = models.CharField( 'USERNAME' max_length=240)
    email=models.EmailField()
    password = models.  