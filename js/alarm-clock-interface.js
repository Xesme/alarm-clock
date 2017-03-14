var alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  setInterval(function(){$('#time').text(moment());}, 1000);


  $('.alarm-form').submit(function(event){
    event.preventDefault();
    var setClock = $('#alarm').val();

    $('#alarm-set').text(alarm(setClock));
  });

});
