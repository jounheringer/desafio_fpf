from rest_framework import serializers

from back.models.Processamento import Processamento


class ProcessamentoOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Processamento
        fields = '__all__'