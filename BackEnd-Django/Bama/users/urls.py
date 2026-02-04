# users/urls.py
from django.urls import path
from .views import LoginView
from .views import RegisterAPIView
urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("users/register/", RegisterAPIView.as_view(), name="user-register"),

]
