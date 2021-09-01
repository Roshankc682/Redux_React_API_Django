from django.urls import path ,include
from Data_Api import views
from rest_framework.routers import DefaultRouter

#creating routers
router = DefaultRouter()

#Register BookViewSet with Router
router.register('', views.BookReadOnlyModelViewSet,basename='BooksReadOnly')

urlpatterns = [
    path('',include(router.urls)),
]