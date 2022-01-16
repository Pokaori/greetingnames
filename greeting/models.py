from django.db import models


class Names(models.Model):
    full_name = models.CharField(max_length=50, unique=True, )

    class Meta:
        db_table = 'names'
