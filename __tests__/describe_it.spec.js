const myBeverage = {
    delicious: true,
    sour: false,
};

beforeAll(()=>{
    console.log("Before All");
})
afterAll(()=>{
    console.log("After All");
})

beforeEach(()=>{
    console.log("Before Each");
});
afterEach(()=>{
    console.log("After each")
});

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

describe("Auth", () => {
    it("test1", () => {})
    it("test2", () => {})
})

