export function handleSubmit(event) {
    event.preventDefault();

    // Reset alert
    const alert = document.getElementById('error__alert');
    if(!alert.classList.contains('hidden')) {
        alert.classList.add('hidden');
    };

    // Validate form textarea input
    let textToAnalyse = document.getElementById('form__text-to-process').value;
    if(Client.validateInput(textToAnalyse)) {
        let validInput = {
            text: textToAnalyse
        };

        // Make a api call to get sentiment
        Client.postRequest('http://localhost:8081/sentiment', validInput)
        // Update UI
        .then( (res) => {
            document.querySelector('.results__card').classList.remove('hidden');
            document.getElementById('results').innerHTML = 'Results:';
            document.getElementById('emotion').innerHTML = `Emotion: ${res.polarity}`;
            document.getElementById('emotion-confidence').innerHTML = `Emotion confidence: ${res.polarity_confidence}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity confidence: ${res.subjectivity_confidence}`;
        });

    } else {     
        // Display alert   
        document.querySelector('.results__card').classList.add('hidden');
        alert.classList.remove('hidden');
        alert.innerHTML = 'Your text needs to be a pure text and longer than 1 character to analyse';
    };
};