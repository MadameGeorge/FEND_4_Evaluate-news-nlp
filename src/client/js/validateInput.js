export function validateInput(inputText) {
    if( typeof inputText == "string" && inputText.length > 1) {
        return true;
    } else {
        return false; 
    };
};