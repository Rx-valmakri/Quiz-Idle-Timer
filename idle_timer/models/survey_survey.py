# -*- coding: utf-8 -*-
from odoo import models, fields


class Survey(models.Model):
    _inherit = 'survey.survey'

    idle_timer = fields.Integer("Idle Timer (Seconds)", default=10)
    is_idle_timer = fields.Boolean()
