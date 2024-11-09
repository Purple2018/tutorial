from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
    

class Project(models.Model):
    name = models.TextField(max_length=100)
    description = models.TextField()
   # created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="projects")
    projectID = models.IntegerField()
    majors = models.TextField()
    gradstatus = models.TextField()
    location = models.TextField()
    skills = models.TextField()
    duration = models.TextField()
    isproject = models.BooleanField()
    applicationlink = models.TextField()

    def __str__(self):
        return self.name

class Users(models.Model):
    username = models.TextField()
    email = models.TextField()
    password = models.TextField()
    profile = models.TextField()