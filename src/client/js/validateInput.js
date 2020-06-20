export function validateInput(inputText) {
    if( typeof inputText === "string" && inputText.length > 1 && isNaN(inputText)) {
        return true;
    } else {
        return false; 
    };
};
