from rest_framework import serializers

from back.models.Processamento import Processamento


class ProcessamentoInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Processamento
        fields = ['num1', 'num2', 'num3']