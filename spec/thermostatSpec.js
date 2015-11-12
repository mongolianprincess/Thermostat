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

  it("should have maximum tempererature of 25 when PSM is on", function() {
    expect(thermostat.powerSavingModeMax).toEqual(25);
  });

  it("should have maximum tempererature of 32 when PSM is off", function() {
    expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(32);
  });

  it("shouldn't let you increase the temperature past the PSM max when PSM is on", function() {
    thermostat.temperature = 25;
    expect(function(){ thermostat.up(); }).toThrow("Can not increase temperature, Power Saving Mode is On");
  });

  it("shouldn't let you increase the temperature past the max when PSM is off", function() {
    thermostat.switchPowerSavingModeOff();
    thermostat.temperature = 32;
    expect(function(){ thermostat.up(); }).toThrow("Can not increase temperature, maximum is reached");
  });
  it ('resets the temperature to 20',function(){
    termostat.temperature = 25;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
});
