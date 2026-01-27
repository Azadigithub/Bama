# users/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if not User.objects.filter(username=username).exists():
            raise serializers.ValidationError("چنین نام کاربری وجود ندارد")

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("رمز عبور اشتباه است")

        data["user"] = user
        return data
