from django.shortcuts import render
from django.http import HttpResponse
import random


# Create your views here.


def home(request):
    return render(request, 'inicio.html')


def tienda(request):
    return render(request, 'tienda.html')




def nosotros(request):
    return render(request, 'nosotros.html')



def donaciones(request):
    return render(request, 'donaciones.html')



def contacto(request):
    return render(request, 'contacto.html')



def seguimiento(request):
    return render(request, 'seguimiento.html')


