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
    it('sets max temp to 25', () => {
        thermostat = new Thermostat()
        thermostat.setPowerSavingMode(true)
        for (let i = 0; i < 10; i++) {
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toEqual(25)
    })
    it('removes max temp of 25', () => {
        thermostat = new Thermostat()
        thermostat.setPowerSavingMode(true)
        thermostat.setPowerSavingMode(false)
        for (let i = 0; i < 10; i++) {
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toEqual(30)
    })
})