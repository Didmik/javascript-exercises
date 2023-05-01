const reverseString = function(word) {
   /* const wordArray = word.split("");
    //debugging console.log(wordArray);
    let wordBox = [];
    for (let i = 0; i <= wordArray.length; i++) {
        wordBox = wordBox + wordArray.pop();  
         
        //wordBox.unshift(deleteLast);
    }
    return wordBox; */
    return word.split("").reverse().join("");

};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
