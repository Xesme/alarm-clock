var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  setInterval(function(){$('#time').text(moment());}, 1000);
  var alarmTime = "";
  var alarm = new Alarm();

  $('.alarm-form').submit(function(event){
    event.preventDefault();
    alarmTime = $('#alarm-time').val();
    alarm.setTime(alarmTime);
    $('#alarm-set').text("Alarm set for: " + alarm.getTime());
  });

  setInterval(function(){
    if (alarm.activateAlarm(moment())) {
      $('#alarm-set').text("Wake up!");
    };
  }, 1000);
});
