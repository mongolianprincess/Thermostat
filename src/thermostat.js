// 'use strict'

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.powerSavingModeMax = 25;
  this.colour = "yellow";
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
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

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
  return this.temperature === this.powerSavingModeMax;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.tempColour = function () {
  if (this.temperature < 18) {
    this.colour = "green";
  } else if (18 < this.temperature && this.temperature < 25) {
    this.colour = "yellow";
  } else {
    this.colour = "red";
  }
};
