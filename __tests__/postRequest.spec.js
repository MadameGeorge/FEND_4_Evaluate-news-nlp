import { postRequest } from '../src/client/js/postRequest';
import "babel-polyfill";
var fetch = require('node-fetch-polyfill');


describe('Test post route', () => {
    test('Check if postRequest function is defined', () => {
        expect(postRequest()).toBeDefined();
    });

    test('Check if the outcome is correct', async () => {
        const input = {
            text: "This is amazing"
        };
        fetch = jest.fn(() => Promise.resolve());
        expect.assertions(1);
        const data = fetch('http://localhost:8081/sentiment', input);
        expect(data.polarity).toContain('positive');
    });
});
