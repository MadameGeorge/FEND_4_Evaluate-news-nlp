export function postRequest(userInput){
    const fetch = require("node-fetch")
    return fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput)
    })
    .then( res => res.json() )
    .then( (res) => {
        document.querySelector('.results__card').classList.remove('hidden');
        document.getElementById('results').innerHTML = 'Results:';
        document.getElementById('emotion').innerHTML = `Emotion: ${res.polarity}`;
        document.getElementById('emotion-confidence').innerHTML = `Emotion confidence: ${res.polarity_confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity confidence: ${res.subjectivity_confidence}`;

        return res;
    });
}
