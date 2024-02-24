const { getData } = require("../app");
const crypto = require("crypto");


// currently with this implementation we are calling real api, which should not in case of unit testing, so, will make fake implementation of randomBytes function  
// we will simply mock this "randomBytes" function and give our own/fake implementation
test("fetch data", async ()=>{
    jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("Bytes");//here, instead of complete module, we have mocked specific function only.
    const res = await getData();
    console.log("res", res);
    expect(res).toBe("Bytes");
})

