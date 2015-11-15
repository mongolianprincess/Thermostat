// 'use strict'

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

  Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
    return this.temperature === this.MAX_TEMP_PSM_ON;
  };

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT ) {
    return "green";
  } if (this.MEDIUM_ENERGY_USAGE_LIMIT <= this.temperature && this.temperature <= this.MAX_TEMP_PSM_ON) {
    return "yellow";
  } else {
    return "red";
  }
};
