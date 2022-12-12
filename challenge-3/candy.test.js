const Candy = require('./candy')

describe('Candy', () => {
    it ('Returns Mars', () => {
        const candy = new Candy('Mars', 10);
        expect(candy.getName()).toEqual('Mars');
    })
    it('Returns 10', () => {
        const candy = new Candy('Mars', 10)
        expect(candy.getPrice()).toEqual(10)
    })
})