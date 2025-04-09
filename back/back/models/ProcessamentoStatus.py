from django.db import models


class ProcessamentoStatus(models.TextChoices):
    PENDING = 'PROCESSANDO', 'Processando'
    DONE = 'FINALIZADO', 'Finalizado'