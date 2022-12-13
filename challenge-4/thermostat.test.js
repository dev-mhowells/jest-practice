const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('gets the temperature', () => {
        thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toEqual(20)
    })
})