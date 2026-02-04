# users/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import LoginSerializer

from rest_framework import status
from django.contrib.auth.models import User

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]

        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "username": user.username,
            # -----
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "is_admin": user.is_staff,
        })


class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if not username or not password:
            return Response({"error": "نام کاربری و رمز عبور الزامی است"}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({"error": "این نام کاربری قبلاً ثبت شده"}, status=400)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return Response({"message": "ثبت نام با موفقیت انجام شد"}, status=201)
