from django.db import models

class Todo(models.Model):
    title: models.CharField = models.CharField(max_length=64)
    description: models.CharField = models.CharField(max_length=255, blank=True)
    completed: models.BooleanField = models.BooleanField(default=False)

    def __str__(self):
        return self.title