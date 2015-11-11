describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has temperaturature starting at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
