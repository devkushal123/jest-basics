
Reference jest document - 
    https://jestjs.io/docs/getting-started

    npm install --save-dev jest
    npm i --save-dev @types/jest

    creae folder __tests__

1. understand about basics way to write tests
2. Mock Functions
    => mocking in unit testing = Mocking is like create objects that simulate the behaviour of the real objects.
    => in simple words, we write fake implemntation of different objects or functions.
    ex- find function of mongodb will return an array as response. but we dont need to call that real function for unit testing. 
    So, simply we will mock the find function, we will simply give fake implementaion of that function.
    => *** in unit testing or mocking we never calls real api or third party.

3. Mock implementation -- The "mockImplementation" method is useful when you need to define the default implementation of a mock function that is created from another module:

- **** mockImplementation vs mockImplementationOne
        - mockImplementation show or give resuls of last call or implementation of the function call.
        - mockImplementationOne - this will give sequenecial results like - for first call will give first result then so on.

        => In "mockImplementation" = prevous implemetation is overwritten entirely and will return latest implementation result.
        => In "mockImplementationOne" = It will give implementation of the first call n after that it will give the default call result.

- *** mockResolveValue vs mockResolveValueOnce 


=== jest.spion