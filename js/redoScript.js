$(document).ready(function(){

  const sentence = prompt("Please Enter a Sentence:");
  console.log(sentence);

  function firstLast (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase();
  };

  function reverse (letters) {
    return letters.charAt(1) +letters.charAt(0);
  };

  function endConc (letters) {
    return sentence + reverse(firstLast(sentence));
  };

  console.log(endConc(sentence));

  function fourthFunction (sentence) {
    return sentence.charAt(Math.floor(sentence.length / 2)) + sentence;
  };
  console.log(fourthFunction(sentence) + reverse(firstLast(sentence)));

  function reverse (str) {
    return str.split("").reverse().join("");
  };

  alert(reverse(fourthFunction(sentence) + reverse(firstLast(sentence))));

});