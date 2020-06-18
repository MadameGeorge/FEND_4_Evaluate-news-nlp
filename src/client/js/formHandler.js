export function handleSubmit(event) {
    event.preventDefault();

    // Validate form textarea input
    const textToAnalyse = document.getElementById('form__text-to-process').value;
    Client.validateInput(textToAnalyse);
        // Send text to analyse to Api
        Client.postRequest('http://localhost:8081/sentiment', { text: textToAnalyse })
    
        // Update UI
        .then( (textSentiment) => {
            // console.log(newsText)
            document.getElementById('emotion').innerHTML = `Emotion: ${textSentiment.polarity}`;
            document.getElementById('emotion-confidence').innerHTML = `Emotion confidence: ${textSentiment.polarity_confidence}`;
            document.getElementById('subjectivity').innerHTML = `Emotion: ${textSentiment.subjectivity}`;
            document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity confidence: ${textSentiment.subjectivity_confidence}`;
        });
};
