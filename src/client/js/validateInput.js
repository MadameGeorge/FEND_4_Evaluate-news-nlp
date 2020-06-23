export function validateInput(inputText) {
    const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const regex = new RegExp(urlRegex);
    if( typeof inputText === "string" 
        && inputText.length > 1 
        && isNaN(inputText)
        && (inputText.match(regex)) == null) {
        return true;
    } else {
        return false; 
    };
};


