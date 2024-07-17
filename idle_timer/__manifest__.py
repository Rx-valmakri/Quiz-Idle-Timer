# -*- coding: utf-8 -*-
{
    'name': "Quiz - Idle Timer",
    'summary': "Quiz - Idle Timer",
    'description': "Manage idle timer for Quiz",
    'depends': ['survey'],

    'data': [
        'views/survey_survey_views.xml',
        'views/survey_templates.xml',
    ],

    'assets': {
        'survey.survey_assets': [
            'idle_timer/static/src/js/idle_timer_mangement.js'
        ],
    },

    'license': 'LGPL-3',
    'application': False,
}