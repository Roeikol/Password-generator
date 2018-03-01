function generateSymbol(){

    var possibleSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    var symbol = possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)];

    return symbol;
}

function generateRandomNumber(minRange, maxRange){

    return minRange + Math.floor(Math.random() * (maxRange - minRange));
}

function generateCapitalLetter(){

    var capitalLetterNumber = 65 + Math.floor(Math.random() * 26);
    var capitalLetter = String.fromCharCode(capitalLetterNumber);

    return capitalLetter;
}

function generateSmallLetter() {

    var smallLetterNumber = 97 + Math.floor(Math.random() * 26);
    var smallLetter = String.fromCharCode(smallLetterNumber);

    return smallLetter;
}

function generatePasswordLength(min, max) {

    max = (max - min) + 1;

    return min + Math.floor(Math.random() * max);
}

function createSingleRandomChar(){

    var arrayOfChars = [];

    var symbol = generateSymbol();
    var capitalLetter = generateRandomNumber(0, 10);
    var smallLetter = generateSmallLetter();
    var number = generateCapitalLetter();

    arrayOfChars.push(symbol, capitalLetter, smallLetter, number);

    var randomChar = arrayOfChars[Math.floor(Math.random() * arrayOfChars.length)];
    
    return randomChar;
}

function createPassowrd(){
    
    var passwordArray = []
    var passwordLength = generatePasswordLength(8, 24);
    

    for (var i = 0; i < passwordLength; i++){
        
        passwordArray.push(createSingleRandomChar());
    }
    if(validatePassword(passwordArray)){
        var password = passwordArray.join("");
        appendToPage(password);
    }else{
        createPassowrd();
    }

}

function appendToPage(password){

    document.querySelector("#output").innerHTML = password;
}

function validatePassword(passwordArray){
    
    var numberInArray = null;
    var capitalLetterInArray = null;
    var lowerLetterInArray = null;
    var symbolInArray = null;
        
    for(var i = 0; i < passwordArray.length; i++){

        if(!isNaN(passwordArray[i])){

            numberInArray = passwordArray[i];

        } else if (passwordArray[i].match(/[A-Z]/)){

            capitalLetterInArray = passwordArray[i];

        } else if (passwordArray[i].match(/[a-z]/)) {

            lowerLetterInArray = passwordArray[i];

        }else{
            
            symbolInArray = passwordArray[i];

        }
    }

    if (numberInArray == null || capitalLetterInArray == null || lowerLetterInArray == null || symbolInArray == null){

        return false;

    }else{

        return true;
    }

}

document.getElementById("generateBtn").addEventListener("click", createPassowrd);