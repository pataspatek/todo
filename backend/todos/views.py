from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


@api_view(["GET"])
def index(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def add(request):
    serializer = TodoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)

    return Response(serializer.errors, status=400)


@api_view(["PATCH"])
def update_todo(request, pk):
    try:
        todo = Todo.objects.get(id=pk)
    except Todo.DoesNotExist:
        return Response({"error": "Todo not found"}, status=404)

    serializer = TodoSerializer(todo, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)