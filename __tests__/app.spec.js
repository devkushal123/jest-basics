const { getData } = require("../app");
const crypto = require("crypto");

jest.mock("crypto");//here, complete module we have mocked it.

// currently with this implementaion we are calling real api, which should not in case of unit testing, so, will make fake implemation of randomBytes function  
// we will simply mock this "randomBytes" function and give our own/fake implemntation
test("fetch data", async ()=>{
    // crypto.randomBytes.mockResolvedValueOnce("bytes");
    crypto.randomBytes.mockImplementationOnce(()=>{
        Promise.resolve("bytes");   
    });
    const res = await getData();
    console.log("res", res);
})

