class Basket {
    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    getTotalPrice() {
        if (this.items.length === 0) return 0
        return this.items.map((item) => item.getPrice()).reduce((acc, val) => acc + val)
    }
}

module.exports = Basket