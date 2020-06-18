import { postRequest } from '../src/client/js/postRequest';

describe('Test post route', () => {
    test('Check if postRequest function is defined', () => {
        expect(postRequest()).toBeDefined();
    });

    test('Check if the outcome is correct', async () => {
        const input = {
            text: "This is amazing"
        };
        expect.assertions(1);
        const data = await fetch('http://localhost:8081/sentiment', input);
        expect(data.polarity).toContain('positive');
    });
});
