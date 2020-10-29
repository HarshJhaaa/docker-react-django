from django.db import models

# Create your models here.
class Greet(models.Model):
    messages  = models.TextField(max_length = 32,blank =False,null = False)
