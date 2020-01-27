//exercise 1
function isValidPassword(password, username){

    if(password.length < 8){
        console.log('Password must contain atleast 8 characters');
        return false;
    } else if(password.indexOf(' ') !== -1){
        console.log('Password cannot contain spaces');
        return false;
    } else if(password.includes(username)){
        console.log('Password cannot match username');
        return false;
    }
    return true;
}

function isValidPasswordTwo(password, username){
    const tooShort = password.lengh < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.includes(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

//exercise 2 - finding avg in an array of numbers 
function avg(array){
    let total = 0;
    for(let numbers of array){
        total += numbers;
    }
    let avg = total / array.length;
    return avg;
}

//exercise 3 - pangram 
function isPangramOne(sentence){
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    abc.splice(abc.indexOf('c'),1);
    for(let char of sentence){
        for(let char2 of abc){
            if(char2 === char){
                abc.splice(abc.indexOf(char2),1);
            }
        }
    }
    if(abc.length === 0){
        return true;
    } else {
        return false;
    }
}

function isPangramTwo(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}

//exercise 4 - getCard
function noPicker(array){
    const value = Math.floor(Math.random() * array.length);
    return array[value];
}

function getCard(){
    let possibleCardValue = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    let possibleCardSuit = ['Clubs','Spades','Hearts','Diamonds']
    
    card = {
        value: noPicker(possibleCardValue),
        suit: noPicker(possibleCardSuit)
    }
    return Object.values(card);
}