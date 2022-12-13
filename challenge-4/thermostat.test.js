const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('gets the temperature', () => {
        thermostat = new Thermostat()
        expect(thermostat.getTemperature()).toEqual(20)
    })
    it('increases the temperature by 2', () => {
        thermostat = new Thermostat()
        thermostat.up()
        thermostat.up()
        expect(thermostat.getTemperature()).toEqual(22)
    })
    it('decreases the temperature by 1', () => {
        thermostat = new Thermostat()
        thermostat.down()
        expect(thermostat.getTemperature()).toEqual(19)
    })
})