import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'back.settings')

celery = Celery('worker', broker='amqp://reringuy:123456@rabbitmq:5672//')
celery.config_from_object('django.conf:settings', namespace='CELERY')
celery.autodiscover_tasks(['back.back'])