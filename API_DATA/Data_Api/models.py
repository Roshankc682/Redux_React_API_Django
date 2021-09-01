from django.db import models
import uuid

class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=False)
    price = models.DecimalField(decimal_places=2,max_digits=10000)

      # ovverride the save and send the message through channel
    # def save(self, *args, **kwargs):
    #     # all channel layer imported
    #     id = uuid.uuid4()
    #     super(Book,self).save(*args,**kwargs)