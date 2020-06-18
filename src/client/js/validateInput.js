export function validateInput(inputText) {
    if( typeof inputText == "string" && inputText.length > 1) {
        return true;
    } else {
        throwError();
        return false; 
    };
};

export function throwError() {
    let results = document.getElementById('results__card');
    let error = document.createElement('p');
    results.appendChild(error);
    error.textContent = 'Your text needs to be a pure text and longer than 1 character to analyse';
};