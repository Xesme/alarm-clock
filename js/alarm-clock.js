Alarm = function() {
  this.alarm = "";
}

Alarm.prototype.setTime = function(alarmTime) {
  this.alarm = new Date(alarmTime)
}

Alarm.prototype.getTime = function() {
  return this.alarm;
}

Alarm.prototype.activateAlarm = function(currentTime) {
  if (this.getTime() === currentTime) {
    return true;
  } else {
    return false;
  }
}

exports.alarmModule = Alarm;
