// basic unit test
test("Check addition", ()=>{
    expect(2+2).toBe(4);
});

//assertions
test("null", ()=>{
    const i = null;
    expect.assertions(2);
    expect(i).toBeNull();
    expect(i).toBeDefined();
})

//how to test array 
const animals = ["cat", "dog"];
test("Animal check", ()=>{
    expect(animals).toContain("dog");  
    expect(animals).toBeInstanceOf(Array);
})

// how to test error
function getData(){
    throw new Error("Not Found");
}

test("getData", ()=>{
    expect(()=>getData()).toThrow();  
})

// addition example

function sum(a, b) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});