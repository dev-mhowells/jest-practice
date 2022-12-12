const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns Mars and Maltesers', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    })
    it('returns Mars', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    })
    it('returns Skitties, Skittles and Starburst', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    })
    it('returns Skitties and Skittles', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
    })
    it('returns Mars and Maltesers when passed lowercase letter m', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
    })
})