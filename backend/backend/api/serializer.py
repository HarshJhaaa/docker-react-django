from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Greet
class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']

    def create (self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class Greetserializer(serializers.ModelSerializer):
    class Meta:
        model = Greet
        fields = ['id','messages']
