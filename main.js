
/*

function name: xify
parameters: string - str

return: string
*/

function xify(str){
    let newStr = "";

    for(let i =0; i < str.length; i++){
        newStr += "x";
    }

    return newStr;
}

// console.log(xify('hello'));
// console.log(xify('hi there'));

/*

function: yellingChars
parameters: 1 string str
return a newStr

let newStr = "";
loop
+= !


 */

function yellingChars(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        //newStr += str[i]; //adding back the charracter from the original string
        // newStr += "i";  //adds the exclamation point after it

        newStr += str[i] + "i";
    }
    return newStr;
}

console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));

function indexedChars(){
    for(let i=0; i=a; i++){
ind = message.charAt(i);
ind = ind.concat(i)
text = text + ind
    }
    console.log(text);
}
/*
for(let i = 0; .....)
newStr += str[i]

if(str[i] === "?" || str[i] === "."){
    newStr += "!";
}

*/

function exlaim(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){

        if(str[i] === "?" || str[i] === "."){
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(exlaim('What are you doing? Are you a fool?'));
console.log(exlaim("This is fine."));


function truncate(str){
    let newStr = "";

    for(let i = 0; i < 15; i++){
        newStr += str[i];
    }
    newStr += "...";
    // return newStr + "...";
    // return `${newStr}...`
    return newStr;
}
console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));

/*
change space to a period (.)

changes all characters to lowercase

then add @codeimmersives.com
*/

function ciEmailify(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        } else {
            newStr += str[i];
        }
    }
    newStr += "codeimmersives.com";
    return newStr.toLowerCase();
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

console.log("----------------------\n");


//reverse
myString = "colin";
myString2 = "Anthony Derosa";
function reverse(str){
    let newStr = '';
    for(let i =(str.length - 1); i >= 0; i--){
        newStr = newStr +str[i];
    }
    return newStr;
}
console.log(reverse(myString));
console.log(reverse(myString2));

console.log("-------------------------------\n");


// only vowels
const v1 = 'a';
const v2 = 'e';
const v3 = 'i';
const v4 = 'o';
const v5 = 'u';

myString = "colin jaffe";
myString2 = "Anthony DeRosa";
let myString3 = "quickly";
function onlyVowels(str){
    let newString = '';
    let char = '';
    for(let i = 0; i < str.length; i ++){
        char = str[i];
        if(char.toLowerCase() === v1.toLowerCase()){
            newString = newString + char;
        }
        else if(char.toLowerCase() === v2.toLowerCase()){
            newString = newString + char;
        }
        else if(char.toLowerCase() === v3.toLowerCase()){
            newString = newString + char;
        }
        else if(char.toLowerCase() === v4.toLowerCase()){
            newString = newString + char;
        }
        else if(char.toLowerCase() === v5.toLowerCase()){
            newString = newString + char;
        }
    }

    return newString;
}
console.log(onlyVowels(myString));
console.log(onlyVowels(myString3));
console.log(onlyVowels(myString2));