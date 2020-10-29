from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializer import Userserializer,Greetserializer
from .models import Greet

# Create your views here.
def index(request):
    return render(request,'index/index.html')

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer

class GreetViewSet(viewsets.ModelViewSet):
    queryset = Greet.objects.all()
    serializer_class = Greetserializer
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated,]
