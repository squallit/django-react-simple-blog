from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet

router = DefaultRouter()
router.register('', ArticleViewSet, basename='article')
urlpatterns = router.urls
