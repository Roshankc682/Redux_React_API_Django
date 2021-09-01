from django.contrib import admin
from Data_Api.models import Book


@admin.register(Book)
class Book(admin.ModelAdmin):
    list_display = ['id','title','description','price']