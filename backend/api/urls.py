from django.urls import path
from . import views

urlpatterns = [
    path('employees', views.employees),
    path('employees/update/<pk>', views.updateEmployee),
    path('employees/delete/<pk>', views.deleteEmployee),

    path('students', views.students),
    path('students/update/<pk>', views.updateStudent),
    path('students/delete/<pk>', views.deleteStudent),
]
