$(document).ready(function(){

  const sentence = prompt("Please enter a sentence");
  console.log(sentence);

  function firstLast (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase();
  };

  function reverseOrder (letters) {
    return letters.charAt(1) + letters.charAt(0); 
  };

  function addReverseToEnd (sentence) {
    return sentence + reverseOrder(firstLast(sentence));
  };

  console.log(addReverseToEnd(sentence));

  function countLetterDivideByTwo (sentence) {
    return sentence.charAt(Math.floor(sentence.length / 2)) + addReverseToEnd(sentence);
}
console.log(sentence.charAt(Math.floor(sentence.length / 2)) + addReverseToEnd(sentence));

function reverse (sentence) {
return countLetterDivideByTwo(sentence).split("").reverse().join("");
}
console.log(countLetterDivideByTwo(sentence).split("").reverse().join(""));

jQuery("img.left").click(function() {
alert(sentence);
});

jQuery("img.right").click(function() {
alert(reverse(sentence));
});
  

});

// .charAt(number);