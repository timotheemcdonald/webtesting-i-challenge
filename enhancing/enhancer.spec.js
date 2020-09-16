const enhancer = require('./enhancer.js');
// test away!


describe('.repair', () => {
    it('durability should be 100', function () {

        let item = {
            name:'test',
            durability: 2,
            enhancement: 0
        }

        const result  = enhancer.repair(item)
        expect(result.durability).toBe(100)
    })
})

describe('.fail', () => {
    it('durability should be 15', function () {
        let item = {
            name:'test2',
            durability: 20,
            enhancement: 1
        }
        const result = enhancer.fail(item)
        expect(result.durability).toBe(15)
    })

    it('durability should be 10', function () {
        let item = {
            name: 'test',
            durability: 20,
            enhancement: 15
        }
        const result = enhancer.fail(item)
        expect(result.durability).toBe(10)
    })

    it('durability should be 10 and enhancement should be 15', function () {
        let item = {
            name: 'test',
            durability: 20,
            enhancement: 16
        }
        const result = enhancer.fail(item)
        expect(result.enhancement).toBe(15)
        expect(result.durability).toBe(10)
    })
})

describe('.success', () => {
    it('enhancement should be 11', function () {
        let item = {
            name: 'test',
            durability: 10,
            enhancement: 10
        }
        const result = enhancer.success(item)
        expect(result.enhancement).toBe(11)
    })
})