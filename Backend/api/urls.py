from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('recipe', RecipeViewSet, basename='recipe')
urlpatterns = router.urls
