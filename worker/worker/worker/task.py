from statistics import median
from back.models.Processamento import Processamento
from celery import shared_task
from back.models.ProcessamentoStatus import ProcessamentoStatus

@shared_task
def send_numbers(processo_id):
    processamento = Processamento.objects.get(id=processo_id)
    nums = [processamento.num1, processamento.num2, processamento.num3]
    if len(nums) < 3:
        return {"error": "Lista invalida"}

    processamento.average = sum(nums) / len(nums)
    processamento.median = median(nums)
    processamento.status = ProcessamentoStatus.DONE
    processamento.save()
