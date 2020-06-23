import { handleSubmit } from '../src/client/js/formHandler';

describe('Tests handleSubmit', () => {
    test('Checks if handleSubmit function is defined', () => {
        expect(handleSubmit).toBeDefined();
    });
    test('Checks if it is a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});