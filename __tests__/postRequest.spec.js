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
        const output = {
            polarity: 'positive'
        };
        postRequest(input)
        .then(function(res) {
            expect.assertions(1);
            expect(res).toContain(output);
        });
    });
});
