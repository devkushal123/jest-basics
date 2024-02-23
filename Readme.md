Referred Video's - https://www.youtube.com/watch?v=5QRx-i5jVNw
> [!NOTE] - should install nodejs in your system (>= 16) and vscode.

### Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
### Jest is a library used to automate testing of your code.
### Here, we will write unit tests and will also learn automated testing.

#### Types of testing----
-   Unit Testing - Testing individual functions that all together make our entire code base.
-   Integrated Testing - Software modules or functions that are integrated together are tested as a group.
-   End-to-end Testing - This involves the automated testing the entire software or completed major parts of the software. Involves using Pupeteer JS along with Jest.


> Reference jest document - 
    https://jestjs.io/docs/getting-started

    Create a new repo and then make initial setup using - 
        npm init -y
    npm install --save-dev jest
    npm i --save-dev @types/jest

    create folder __tests__ or tests

- Create "tests" folder on root directory and create new file "myFirstTest.test.js" inside it. 
- Define test script in your package.json file-
    "scripts": {
        "test": "jest"
    },

- Need to add "--watchAll" in test script to run it on watch mode and it will look tests in all the test files.
- Learn matcher like - expect.toBe, expect.not.toBe
- Learn more matcher methods now- number, string and array matches.  
- Reference type and primitive type equality
    - primitive type equality = use toBe = its use for number, string comparisons.
    - Reference type equality = use toEqual = used for array and objects.


1. understand about basics way to write tests
2. Mock Functions
    => mocking in unit testing = Mocking is like create objects that simulate the behaviour of the real objects.
    => in simple words, we write fake implementation of different objects or functions.
    ex- find function of mongodb will return an array as response. but we don't need to call that real function for unit testing. 
    So, simply we will mock the find function, we will simply give fake implementation of that function.
    => *** in unit testing or mocking we never calls real api or third party.

3. Mock implementation -- The "mockImplementation" method is useful when you need to define the default implementation of a mock function that is created from another module:

- **** mockImplementation vs mockImplementationOne
        - mockImplementation show or give resuls of last call or implementation of the function call.
        - mockImplementationOne - this will give sequential results like - for first call will give first result then so on.

        => In "mockImplementation" = previous implementation is overwritten entirely and will return latest implementation result.
        => In "mockImplementationOne" = It will give implementation of the first call n after that it will give the default call result.

- *** mockResolveValue vs mockResolveValueOnce 


4. === jest.spyOn
    By default, jest.spyOn also calls the spied method. This is different behavior from most other test libraries. If you want to overwrite the original function, you can use jest.spyOn(object, methodName).mockImplementation(() => customImplementation) or object[methodName] = jest.fn(() => customImplementation).

    ex- jest.mock("crypto") is mocking entire module but if we want to mock specific function then  we can use jest.spyOn("scrypto", "randomebytes");

5. "describe" and "it" block
    -- describe(name, fn) creates a block that groups together several related tests. 
    -- For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:
    -- we can use it in place of test inside describe.

6. beforeEach, afterEach, beforeAll and afterAll

> Reference document for all globals as above - https://jestjs.io/docs/api