import { validateInput } from '../src/client/js/validateInput';
import "babel-polyfill";
var fetch = require('node-fetch-polyfill');

describe('Test to check if function correctly recognize string and length', () => {
    test('is this a string', () => {
        const input = "test";
        expect(typeof input).toBe("string");
    });
    test('is it longer than 1 character', () => {
        const input1 = "test";
        const input2 = "t";
        const output1 = true;
        const output2 = false;

        expect(validateInput(input1)).toBe(output1);
        expect(validateInput(input2)).toBe(output2);
    })
});