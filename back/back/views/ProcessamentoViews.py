from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from back.models.Processamento import Processamento
from back.serializers.ProcessamentoInputSerializer import ProcessamentoInputSerializer
from back.serializers.ProcessamentoOutputSerializer import ProcessamentoOutputSerializer
from back.tasks import send_numbers
@api_view(['GET'])
def list(request):
    """
    Listagem de todos os objetos de Processamento.
    """
    processamento = Processamento.objects.all()
    serializer = ProcessamentoOutputSerializer(processamento, many=True)
    return Response(serializer.data, status=200)


@api_view(['GET'])
def getById(request, id):
    """
    Listagem de todos os objetos de Processamento.
    """
    processamento = get_object_or_404(Processamento, pk=id)
    serializer = ProcessamentoOutputSerializer(processamento, many=False)
    return Response(
        {
            "id": serializer.data["id"],
            "status": serializer.data["status"],
            "media": serializer.data["average"],
            "mediana": serializer.data["median"]
        }, status=200)


@api_view(['POST'])
def create(request):
    """
    Criação de um objeto de Processamento.
    """
    serializer = ProcessamentoInputSerializer(data=request.data)
    if serializer.is_valid():
        response = serializer.save()  # Cria o objeto no banco de dados
        send_numbers.delay(response.id)
        return Response({"id": response.id, "status": response.status}, status=201)
    return Response("Erro ao processar dados", status=400)
