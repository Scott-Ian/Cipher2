$(document).ready(function(){

  //Prompts user for a centence, then logs to console
  const userSentence = prompt("Please enter a sentence to be ciphered:");
  console.log(userSentence);

  //Acquires user input sentence length
  const sentenceLength=userSentence.length;
  console.log(sentenceLength);
  
  const firstChar = 0;
  const lastChar = sentenceLength -1;

  //Capitalizes the first and last letter in the sentence and returns
  const firstLastCapital = function(userSentence){
    const capitalFirst = toUpper(userSentence.charAt(firstChar));
    const capitalLast = toUpper(userSentence.charAt(lastChar));

    console.log(capitalFirst + capitalLast);
    return capitalFirst + capitalLast;
  };

});

// .charAt(number);