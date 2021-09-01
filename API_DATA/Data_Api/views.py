from Data_Api.models import Book
from Data_Api.serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated , AllowAny


class BookReadOnlyModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
     # use this to authenticate for one class but this is tedious
    # so import it in settings
    # authentication_classes=[BasicAuthentication]
    # permission_classes=[IsAuthenticated]
    # or for any user to allow
    # permission_classes=[AllowAny]