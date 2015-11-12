describe('Thermostat', function() {

  'use strict';

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has temperaturature starting at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperaturature by 1 with up button', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it ('decreases temperature by 1 with down button',function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it ('has a minimum temperature at 10 degrees', function() {
    for (var i = 0; i < 11; i++) {thermostat.down();}
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it ('has power saving mode on by default', function () {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it ('can switch power saving mode off',function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.powerSavingMode).toBe(false);
  });
});
