const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('returns Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })
    it('returns Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })
    it('returns FizzBuzz', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
})