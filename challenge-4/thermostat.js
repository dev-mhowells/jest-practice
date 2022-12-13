class Thermostat {
    constructor() {
        this.temperature = 20
        // holds temp with default val of 20
        // holds psm as bool - on by default 
    }
    up() {
        // increases temp by 1
        // check if psm mode is on - max 25
        // max 32 if psm off
    }
    down() {
        // decreases temp by 1
        // min temp of 10
    }
    getTemperature() {
        // returns temp
        return this.temperature
    }
    setPowerSavingMode(bool) {
        // set psm to on
        // max temp is 25
    }
    reset() {
        // sets temp to 20
    }
    checkEnergyUsage() {
        // <18 low, <= 25 med, else high
    }
}

module.exports = Thermostat