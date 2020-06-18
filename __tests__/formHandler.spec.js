import { handleSubmit } from '../src/client/js/formHandler';

describe('Test event handler', () => {
    test('Function is defined', () => {
        expect(handleSubmit).toBeDefined();
    });
    test('Is a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});