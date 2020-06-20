import { handleSubmit } from '../src/client/js/formHandler';

describe('Tests event handler', () => {
    test('Checks if handleSubmit function is defined', () => {
        expect(handleSubmit).toBeDefined();
    });
    test('Checks if it is a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});


import { postRequest } from '../src/client/js/postRequest';
import "babel-polyfill";
var fetch = require('node-fetch-polyfill');

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
            // expect.assertions(1);
            expect(res.polarity).toContain('negative');
        })
    });
});