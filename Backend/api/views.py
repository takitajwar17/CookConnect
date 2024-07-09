from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from .serializers import RecipeSerializer
from .models import Recipe

# Create your views here.
def home(request):
    return HttpResponse("This is the homepage of the API.")

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        recipe = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(recipe)
        return Response(serializer.data)

    def update(self, request, pk=None):
        recipe = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        recipe = get_object_or_404(self.queryset, pk=pk)
        return Response({"message": "Recipe deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
