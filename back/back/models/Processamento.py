from django.db import models

from back.models.ProcessamentoStatus import ProcessamentoStatus


class Processamento(models.Model):
    num1 = models.FloatField()
    num2 = models.FloatField()
    num3 = models.FloatField()
    status = models.CharField(choices=ProcessamentoStatus, default=ProcessamentoStatus.PENDING)
    average = models.FloatField(default=0, db_column='media')
    median = models.FloatField(default=0, db_column='mediana')

    class Meta:
        db_table = 'processamento'