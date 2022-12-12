const Basket = require("./basket")

describe('Basket', () => {
    it('gets the total price of all items', () => {
        const candy1 = { getName: () => "Mars", getPrice: () => 10}
        const candy2 = { getName: () => "Skittles", getPrice: () => 8}
        const basket = new Basket
        basket.addItem(candy1)
        basket.addItem(candy2)
        expect(basket.getTotalPrice()).toEqual(18)
    })
})