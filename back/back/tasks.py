from statistics import median
from celery import shared_task
from back.models.Processamento import Processamento
from back.models.ProcessamentoStatus import ProcessamentoStatus


@shared_task(
    max_retries=5,
    default_retry_delay=30
)
def send_numbers(processo_id):
    processamento = Processamento.objects.get(id=processo_id)
    nums = [processamento.num1, processamento.num2, processamento.num3]
    if len(nums) < 3:
        return {"error": "Lista invalida"}

    processamento.average = sum(nums) / len(nums)
    processamento.median = median(nums)
    processamento.status = ProcessamentoStatus.DONE
    processamento.save()
