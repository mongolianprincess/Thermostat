// 'use strict'

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.powerSavingModeMax = 25;


}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSavingMode === true && this.temperature === this.powerSavingModeMax) {
    throw "Can not increase temperature, Power Saving Mode is On";
  } else if (this.powerSavingMode === false && this.temperature === this.MAXIMUM_TEMPERATURE) {
    throw "Can not increase temperature, maximum is reached";
  } else {
  this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.reset = function (){
  this.temperature = 20;
};
