/** @odoo-module */
import publicWidget from "@web/legacy/js/public/public_widget";
import SurveyFormWidget from '@survey/js/survey_form';
import { jsonrpc } from "@web/core/network/rpc_service";
console.log("win",window)
console.log("thi",this)
let timer, currSeconds = 0;
function startIdleTimer() {
        if (window.is_idle_timer)
        {
             currSeconds++;
             if (currSeconds == window.idle_timer)
             {
               if (this.$(".o_survey_finished").length != 0) this.$("a[role='button']")[0].click();
               else this.$("button[type='submit']")[0].click();
             }
             this.$(".secs").text(currSeconds);
             this.$(".idle_time").show();
        }
}

function resetTimer() {
        if (window.is_idle_timer)
        {
           this.$(".idle_time").hide();
           clearInterval(timer);
           currSeconds = 0;
           timer = setInterval(startIdleTimer, 1000);
        }
}
     window.onload = resetTimer;
     window.onmousemove = resetTimer;
     window.onmousedown = resetTimer;
     window.onclick = resetTimer;
     window.onkeypress = resetTimer;


SurveyFormWidget.include({
    start: function () {
          this._super(...arguments);
          var self = this;
          var options = self.$('form').data()
          jsonrpc(`/idle_timer/${options.surveyToken}`)
                 .then(response => {
                      window.idle_timer = response.idle_timer
                      window.is_idle_timer = response.is_idle_timer
                 });
       },
});



