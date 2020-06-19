export function handleSubmit(event) {
    event.preventDefault();

    // Reset the alert and old results
    const alert = document.getElementById('error__alert');
    if(!alert.classList.contains('hidden')) {
        alert.classList.add('hidden');
    };

    // Validate form textarea input
    let textToAnalyse = document.getElementById('form__text-to-process').value;
    if(Client.validateInput(textToAnalyse)) {

        // Send text to analyse to Api
        Client.postRequest('http://localhost:8081/sentiment', { text: textToAnalyse })
    
        // Update UI
        .then( (textSentiment) => {
            document.querySelector('.results__card').classList.remove('hidden');
            document.getElementById('results').innerHTML = 'Results:';
            document.getElementById('emotion').innerHTML = `Emotion: ${textSentiment.polarity}`;
            document.getElementById('emotion-confidence').innerHTML = `Emotion confidence: ${textSentiment.polarity_confidence}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${textSentiment.subjectivity}`;
            document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity confidence: ${textSentiment.subjectivity_confidence}`;
        });

    // Display alert 
    } else {
        document.querySelector('.results__card').classList.add('hidden');
        alert.classList.remove('hidden');
        alert.innerHTML = 'Your text needs to be a pure text and longer than 1 character to analyse';
    };
};