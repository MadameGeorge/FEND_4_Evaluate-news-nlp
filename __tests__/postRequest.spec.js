import { postRequest } from '../src/client/js/postRequest';
const fetchMock = require('fetch-mock');

describe('Test post route', () => {
    test('Checks if postRequest function is defined', () => {
        expect(postRequest()).toBeDefined();
    });

    test('Checks if postRequest  ', async () => {
        fetchMock.post('http://fake.com', { polarity: "positive" });
        const response = await postRequest('http://fake.com');

        expect.assertions(1);
        expect(response.polarity).toEqual('positive');
    });
});
