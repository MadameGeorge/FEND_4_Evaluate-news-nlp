import { validateInput } from '../src/client/js/validateInput';

describe('Test to check if function correctly recognize string and length', () => {
    test('Checks if it is a string', () => {
        const input = "test";
        expect(typeof input).toBe("string");
    });
    test('Checks if string is longer than 1 character', () => {
        const input1 = "test";
        const input2 = "t";
        const output1 = true;
        const output2 = false;

        expect(validateInput(input1)).toBe(output1);
        expect(validateInput(input2)).toBe(output2);
    })
});