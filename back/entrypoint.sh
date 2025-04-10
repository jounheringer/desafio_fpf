#!/bin/sh

echo "Aguardando o banco de dados ficar disponível..."
while ! nc -z db 5432; do
  sleep 1
done

echo "Banco disponível. Rodando migrações..."
python back/manage.py makemigrations --noinput
python back/manage.py migrate --noinput

echo "Iniciando o servidor Django..."
exec "$@"