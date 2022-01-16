from django.urls import path
from .views import NamesListView,Greeting

urlpatterns = [
    path('',Greeting.as_view(), name='home'),
    path('names/',NamesListView.as_view(),name='names_list')
]