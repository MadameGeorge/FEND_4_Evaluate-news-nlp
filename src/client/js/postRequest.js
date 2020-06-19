export async function postRequest( url ='', database = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(database)
    })
    try {
        const textSentiment = await response.json();
        return textSentiment;
    }
    catch(error) {
        console.log('Something went wrong with API request:', error);
    }
};
