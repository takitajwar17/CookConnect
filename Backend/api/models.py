from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100, unique=True)
    ingredients = models.TextField()
    instructions = models.TextField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name
