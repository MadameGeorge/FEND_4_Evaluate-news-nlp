import { handleSubmit } from '../src/client/js/formHandler';
import { postRequest } from '../src/client/js/formHandler';
import "babel-polyfill";
var fetch = require('node-fetch-polyfill');

describe('Tests event handler', () => {
    test('Checks if handleSubmit function is defined', () => {
        expect(handleSubmit).toBeDefined();
    });
    test('Checks if it is a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

describe('Test post route', () => {
    test('Checks if postRequest function is defined', () => {
        expect(postRequest()).toBeDefined();
    });

    test('Checks if the outcome is correct', () => {
        const input = {
            text: "This is amazing"
        };
        postRequest(input)
        .then(function(res) {
            data = JSON.stringify(res);
            // expect.assertions(1);
            expect(data.polarity).toContain('negative');
        })
    });
});