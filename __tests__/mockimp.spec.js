
test("mockImplementation",()=>{
    const mockFn = jest
                        .fn(()=> "default" )
                        .mockImplementation(()=>"First Call")
                        .mockImplementation(()=>"Second Call");

    const res1 = mockFn();
    const res2 = mockFn();
    console.log("----mockImplementation1", res1);
    console.log("----mockImplementation2", res2);
})

test("mockImplementationOnce", () => {
    const mockFn = jest.fn(()=>"default")
    .mockImplementationOnce(()=>"First Call")
    .mockImplementationOnce(()=>"Second Call")

    const res1 = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();
    console.log("----------mockImplementationOnce1", res1);
    console.log("----------mockImplementationOnce2", res2);
    console.log("----------mockImplementationOnce3", res3);
})