var Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  setInterval(function(){$('#time').text(moment());}, 1000);
  var setClock = "";
  var alarmTime = new Alarm();

  $('.alarm-form').submit(function(event){
    event.preventDefault();
    setClock = $('#alarm').val();
    alarmTime.setTime(setClock);
    $('#alarm-set').text(alarmTime.getTime());
  });

  setInterval(function() {console.log(alarmTime.activateAlarm(new Date(moment())));}, 1000);

});
