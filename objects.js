"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  // const letters = Array.from(phrase);
  let wordList = {};
  const words = phrase.split(' ');
  
  for(const word of words){
    if(word in wordList){
      wordList[word] += 1;
    }
    else{
      wordList[word] = 1;
    }    
  }
  return wordList;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  if(melonPrices[price] === null){
    return;
  }
  return melonPrices[price].sort();

}
