from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('back', '0004_alter_processamento_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Processamento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num1', models.FloatField()),
                ('num2', models.FloatField()),
                ('num3', models.FloatField()),
                ('status', models.CharField(choices=[...], default='PENDING')),
                ('average', models.FloatField(default=0, db_column='media')),
                ('median', models.FloatField(default=0, db_column='mediana')),
            ],
            options={
                'db_table': 'processamento',
            },
        ),
    ]
