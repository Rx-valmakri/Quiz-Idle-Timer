# -*- coding: utf-8 -*-
from odoo.http import request, Controller, route


class SurveyController(Controller):
    @route('/idle_timer/<string:survey_token>', auth='public', type='json', website=True)
    def get_idle_timer_value(self, survey_token, **kwargs):
        print(survey_token)
        survey = request.env['survey.survey'].sudo().search(
            [('access_token', '=', survey_token)])

        output = {
            'idle_timer': survey.idle_timer,
            'is_idle_timer': survey.is_idle_timer
        }
        return output
