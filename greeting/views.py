from django.shortcuts import render
from django.views.generic import ListView
from django.views import View
from django.http import JsonResponse
import json
from .models import Names
from django.db.utils import IntegrityError


class Greeting(View):
    def get(self, request):
        return render(request, 'home.html', {})

    def post(self, request):
        data=json.loads(request.body)
        try:
            name = Names.objects.create(full_name=data["full_name"])
        except IntegrityError as e:
            return JsonResponse({"error":str(e).split('\n')[0]},status=409)
        except Exception as e:
            return JsonResponse({"error": str(e).split('\n')[0]}, status=400)
        return JsonResponse({"full_name":name.full_name},status=200)


def home_view(request):
    return render(request, 'home.html', {})


class NamesListView(ListView):
    template_name = 'names_list.html'
    queryset = Names.objects.all()
