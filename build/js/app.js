(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Alarm = function() {
  this.alarm = "";
}

Alarm.prototype.setTime = function(alarmTime) {
  this.alarm = alarmTime;
}

Alarm.prototype.getTime = function() {
  return this.alarm;
}

Alarm.prototype.activateAlarm = function(currentTime) {

  if (this.getTime() == currentTime.format("HH:mm")) {
    return true;
  } else {
    return false;
  }
}

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm-clock.js":1}]},{},[2]);
