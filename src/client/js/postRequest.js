export async function postRequest(url, userInput){
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput)
    }).catch( (error) => {
        console.log('fetch error 1', error);
    });
    try {
        const sentiment = await res.json();
        return sentiment;
    }
    catch(error) {
        console.log('fetch error 2', error);
        document.getElementById('error__alert').classList.remove('hidden');
        document.getElementById('error__alert').innerHTML = 'There was a problem with API call, please try again.';
    }
}
