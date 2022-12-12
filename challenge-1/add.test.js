const { add, multiply } = require('./index.js')

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4)
    })
    it('adds 0 and 5', () => {
        expect(add(0, 5)).toBe(5)
    })
})

describe('multiply', () => {
    it('multiplies 2 and 3', () => {
        expect(multiply(2, 3)).toBe(6)
    })
})