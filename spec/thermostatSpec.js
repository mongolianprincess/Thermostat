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
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("should have maximum tempererature of 25 when PSM is on",
    function() {
    thermostat.temperature = 20;
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it ('should have maximum temperature of 32 when PSM is off',function(){
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it ('can set PSM on and off',function (){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it ('resets the temperature to 20',function(){
    thermostat.temperature = 25;
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("should be green when temperature is less than 18", function() {
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("should be yellow when temperature is between 18 and 25", function() {
    thermostat.temperature = 20;
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("should be red when temperature is more than 25", function() {
    thermostat.temperature = 30;
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });

});
