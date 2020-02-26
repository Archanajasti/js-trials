"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
 
  for(let i=0; i < items.length; i++){
    console.log(items[i], i);
  }
  /*for (const i in items){
      for(const item of items){
        console.log(item, i);
      }
    }
*/
}



// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  
  let result = [];
  let resultIndice = 0;
  for(let i=0; i < items.length; i++){
    if (i % 2 === 0){
      result[resultIndice] = items[i];
      resultIndice += 1;

    }
  }
  console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
