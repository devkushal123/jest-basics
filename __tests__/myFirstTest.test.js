const { sum, deleteUserById, findUserById } = require("../utils/helpers");

beforeEach(() => {
    console.log("-------------before each test-------------")
}) 

afterEach(() => {
    console.log("-------------After each test-------------")
}) 

let usersData =[];

beforeAll(()=>{
    usersData = ["a","b"];
    console.log("---------------------------Before All-----------------------")  
})

afterAll(()=>{
    usersData = [];
    console.log("----------------------------------After All--------------------------------")  
})

// Number operations
describe("Number operations", ()=> {
    test("1 plus 1 should be equal to 2", () => {
        let a = 1;
        let b = 1;
        expect(a+b).toBe(2);
    })
    
    test("5 plus 6 is not equal to 10", () => {
        let a = 5;
        let b = 6;
        expect(a+b).not.toBe(10);
    })
})

describe("Testing other matcher methods", () => {
    test("Test variable is undefined", () => {
        let number = undefined;
        
        expect(number).toBeUndefined();
        expect(number).not.toBeDefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    it("Should expect zero to act like zero", ()=>{
        let number = 0;

        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).toBeFalsy();
        expect(number).not.toBeNull();
        expect(number).not.toBeTruthy();
    })

    it("Number Comparison", ()=>{
        const a=1;
        const b=2;
        
        expect(a+b).toBeGreaterThan(2);
        expect(a+b).toBeGreaterThanOrEqual(3);
        expect(a+b).toBeLessThan(10);
        expect(a+b).toBeLessThanOrEqual(3);
    })

    // string matchers
    test("There should be no I in team", () => {
        const string = "team";

        expect(string).not.toMatch(/I/)
    })

    test("There should be 'stop' in christopher", ()=> {
        let string = "christopher";
        expect(string).toMatch(/stop/)
        // expect(string).toMatch(/stop/i)
    })

    // arrays
    test("Should find element in array ", () => {
        let shoppingList = ["iphone", "samsung", "nokia", "lg"];

        expect(shoppingList).not.toContain("mac");
        expect(shoppingList).toContain("iphone");
    })

})
// above test examples are of primitive type equality

// testing Reference type equality-used for array or objects
describe('Testing Reference Equality', () => { 
    const user = {
        name:"Developer Bhaiya"
    };
    user["age"] = 28;

    test("Verify user object with name and age ", () => {
        expect(user).toEqual({
            name:"Developer Bhaiya",
            age: 28
        })
    })

    it("should check and return age and name key in the object", ()=>{
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        )

        expect(user.age).toBeLessThanOrEqual(30)
    })

    test("Array equality", ()=> {
        const users = [
            "Jiya",
            "Meera",
            "Radha"
        ];
        users.push("Siya");
        expect(users).toEqual(["Jiya","Meera","Radha", "Siya"]);
        expect(users).toContain("Siya");
        expect(users).toEqual(expect.arrayContaining(["Siya"]));

        const usersArrayOfObject = [
            {
                name:"Krishn",
                age:10
            },
            {
                name:"Ram",
                age:11
            },
            {
                name:"Mahadev",
                age:12
            },
            {
                name:"Bholenath",
                age:13
            },
        ]

        usersArrayOfObject.push({
            name:"Prabhu",
            age:15
        })

        expect(usersArrayOfObject).toEqual(expect.arrayContaining([
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        ]))
    })
})


// testing imported helper functions
describe("testing imported helper functions", ()=> {
    test("sum function should add 2 numbers", () => {
        expect(sum(5,3)).toBe(8)
    })

    let users=[
        {
            name:"kushal",
            age:28,
            id:1
        },
        {
            name:"Ram",
            age:20,
            id:2
        },
        {
            name:"Shyaam",
            age:22,
            id:3
        }
    ]

    test("Delete a specific user by ID", () => {
        expect(deleteUserById(users, 1)).toEqual([
            {
                name:"Ram",
                age:20,
                id:2
            },
            {
                name:"Shyaam",
                age:22,
                id:3
            }
        ])
    })

    // test driven development
    test("FInd a user by ID", ()=> {
        expect(findUserById(users,2)).toEqual({
            name:"Ram",
            age:20,
            id:2
        })
        // test for failure
        expect(findUserById(users,20)).toBeUndefined()
    })
})