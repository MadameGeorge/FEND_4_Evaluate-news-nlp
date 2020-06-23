export function updateUI(sentiment) {
    document.querySelector('.results__card').classList.remove('hidden');
    document.getElementById('results').innerHTML = 'Results:';
    document.getElementById('emotion').innerHTML = `Emotion: ${res.polarity}`;
    document.getElementById('emotion-confidence').innerHTML = `Emotion confidence: ${res.polarity_confidence}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity confidence: ${res.subjectivity_confidence}`;
    return res;
}