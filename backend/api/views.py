from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Employee, Student
from .serializer import EmployeeSerializer, StudentSerializer

# Create your views here.


@api_view(['GET', 'POST'])
def employees(request):
    if request.method == 'GET':
        data = Employee.objects.all()
        serializer = EmployeeSerializer(data, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        newEmployee = request.data
        serializer = EmployeeSerializer(data=newEmployee)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['PUT'])
def updateEmployee(request, pk):
    data = request.data
    empdata = Employee.objects.get(id=pk)
    serializer = EmployeeSerializer(empdata, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['DELETE'])
def deleteEmployee(request, pk):
    Employee.objects.get(id=pk).delete()
    return Response('Employee deleted successfully')


@api_view(['GET', 'POST'])
def students(request):
    if request.method == 'GET':
        data = Student.objects.all()
        serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        newStudent = request.data
        serializer = StudentSerializer(data=newStudent)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['PUT'])
def updateStudent(request, pk):
    data = request.data
    empdata = Student.objects.get(id=pk)
    serializer = StudentSerializer(empdata, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['DELETE'])
def deleteStudent(request, pk):
    Student.objects.get(id=pk).delete()
    return Response('Student deleted successfully')
