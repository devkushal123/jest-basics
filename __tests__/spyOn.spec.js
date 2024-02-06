const { getData } = require("../app");
const crypto = require("crypto");


// currently with this implementaion we are calling real api, which should not in case of unit testing, so, will make fake implemation of randomBytes function  
// we will simply mock this "randomBytes" function and give our own/fake implemntation
test("fetch data", async ()=>{
    jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("Bytes");//here, complete module + function we have mocked it.
    const res = await getData();
    console.log("res", res);
    expect(res).toBe("Bytes");
})

