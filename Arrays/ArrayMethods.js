//  Array Methods 

const arr = [1,2,3,4,5];
let index = 3;


// 1. Array.at()   -->  [].at(index)
const arrayAt = (array,index)=>{
    const arrlen = array.length;
    const actualIndex = index<0 ? arrlen+index : index;

    if(actualIndex<0 || actualIndex>arrlen){
      return undefined;
    }

    return array[actualIndex];
}
// console.log(arrayAt(arr,index));


// 2. Array.length   --> 
const arrayLength = (array) => {
  let count = 0;
  while (array[count] !== undefined) {
    count++;
  }
  return count;
}
// console.log(arrayLength(arr));


// 3. Array.push()   --> [].push(element)
//Returns New Length of the array
const arrayPush = (array, value) => {
  let index = 0;

  // Find the next available index
  while (array[index] !== undefined) {
    index++;
  }

  array[index] = value;
  return index + 1; // returns new length
};
// console.log(arrayPush(arr,8));
// console.log(arr);


// 4. Array.pop()  --> [].pop()
//Returns the removed element from the array
const arrayPop = (array) => {
  if (array[0] === undefined) 
    return undefined; //  undefined for empty array

  let endIndex = 0;
  
  // Find the last defined index
  while (array[endIndex] !== undefined) {
    endIndex++;
  }

  endIndex--; // Move to the last defined element

  const removedValue = array[endIndex];
  delete array[endIndex]; // Remove the end element

  return removedValue;
};
// console.log(arrayPop(arr));

// 5. Array.shift()  -> It is like pop() remove the first element
//Returns the removed element from the array
const arrayShift = (array) =>{
  if (array[0] === undefined) 
    return undefined; //  undefined for empty array

  const removedValue = array[0];

  // Shift elements to the left
  let index = 1;
  while (array[index] !== undefined) {
    array[index - 1] = array[index];
    index++;
  }

  delete array[index - 1]; // Remove the last element
  return removedValue;
}
// console.log(arrayShift(arr));


// 6. Array.unshift()  --> [].unshift(element)
//Returns New Length of the array
const arrayUnshift = (array, value) => {
  let index = array.length;

  // Shift all elements one position to the right
  while (index > 0) {
    array[index] = array[index - 1];
    index--;
  }

  // Insert the new value at the first position
  array[0] = value;

  return array.length + 1; // Return the new length (this will be the index + 1)
};
// console.log(arrayUnshift(arr,8));
// console.log(arr);



// 7. Array.filter()    --> [].filter(callbackfn)
// callback(currentEle , index , array)
 
const arrayFilter = (array, callback) => {
  const newArr = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr[index] = array[i];
      index++;
    }
  }
  return newArr;
};

// const even = arrayFilter(arr, (num) => num % 2 === 0);
// console.log(even);  // [2, 4]

// 8. Array.map()  --> [].map(callbackfn)
// callback(currentEle , index , array)
// Returns a new array
const arrayMap = (array, callback) => {
  const newArr = [];
  let index = 0;

  while (array[index] !== undefined) {
    newArr[index] = callback(array[index], index, array);
    index++;
  }
  return newArr;
};
// console.log(arrayMap(arr , (num) => num+2));

// 9. Array.find()   --> [].find(callback)
// returns the first element that satisfy the condition else undefined
const arrayFind = (array , callback) =>{
  let index = 0;

  while (array[index] !== undefined) {
    if (callback(array[index], index, array)) {
      return array[index]; // Return first matching element
    }
    index++;
  }
  return undefined; // If nothing found
}
// console.log(arrayFind(arr , (num) => num>2));


// 10. Array.forEach()  -->  [].forEach(callback)
// Executes a provided function once for each array element.

const arrayForEach = (array, callback) => {
  let index = 0;

  while (array[index] !== undefined) {
    callback(array[index], index, array);
    index++;
  }
};
// arrayForEach(arr , (elem) => console.log(elem*2));




