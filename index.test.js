const {db} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        const createdBand = await Band.create({
            name: "JackyBoys",
            genre: "Cool"
        })
        expect(createdBand.name).toBe('JackyBoys');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: "Jack",
            instrument: "voice"
        })
        expect(testMusician.name).toBe('Jack');
    })
})