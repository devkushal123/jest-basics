
test("mockImplementaion",()=>{
    const mockFn = jest
                        .fn(()=> "default" )
                        .mockImplementation(()=>"First Call")
                        .mockImplementation(()=>"Second Call");

    const res1 = mockFn();
    const res2 = mockFn();
    console.log("mockImplementaion1", res1);
    console.log("mockImplementaion2", res2);
})

test("mockImplementationOnce", () => {
    const mockFn = jest.fn(()=>"default")
    .mockImplementationOnce(()=>"Fisrt Call")
    .mockImplementationOnce(()=>"Second Call")

    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();
    console.log("mockImplementationOnce1", res1);
    console.log("mockImplementationOnce2", res2);
    console.log("mockImplementationOnce3", res3);
})