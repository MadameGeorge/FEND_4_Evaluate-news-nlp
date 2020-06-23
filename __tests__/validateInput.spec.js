import { validateInput } from '../src/client/js/validateInput';

describe('Test to check if function correctly recognize string and length', () => {
    test('Checks if it is a valid input', () => {
        const input = "test";
        expect(typeof input).toBe("string");
    });
    test('Checks if string properly validated', () => {
        const validText = "test";
        const oneLetter = "t";
        const numbers = "123";
        const urlWww = "www.google.com";
        const urlHttp = "http://www.google.com";
        const output1 = true;
        const output2 = false;

        expect(validateInput(validText)).toBe(output1);
        expect(validateInput(oneLetter)).toBe(output2);
        expect(validateInput(numbers)).toBe(output2);
        expect(validateInput(urlWww)).toBe(output2);
        expect(validateInput(urlHttp)).toBe(output2);
    });
});