// String Methods

const string = "Hello Friends"


// 1. String.at()  --> "".at(index)
const stringAt = (str, index) => {
    const len = str.length;
    if (index < 0) {
        index = len + index;
    }
    if (index < 0 || index >= len) {
        return undefined;
    }
    return str[index];
}
//   console.log(stringAt(string,8));

// 2. String.charAt()   --> "".charAt(index)
// it does not work for negative value 

const stringCharAt = (str, index) => {
    if (index < 0 || index >= str.length) {
        return '';
    }
    return str[index];
}
// console.log(stringCharAt(string,3));


// 3. String.length  --> "".length
const stringLength = (str) => {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}
// console.log(stringLength(string));

// 4. String.concat()  --> "".concat(str1,str2,str3,...)
function stringConcat(str, ...args) {
    let concatedStr = str;
    for (let arg of args) {
        concatedStr += String(arg);
    }
    return concatedStr;
}

//   console.log(stringConcat(string,"hsele"," ","sjfjs","sdfk"));


// 5. String.indexOf()   -->  "".indexOf(searchString, start)
const stringIndexOf = (str, searchStr, start = 0) => {
    const strLen = str.length;
    const searchLen = searchStr.length;


    if (searchLen === 0)
        return start <= strLen ? start : -1;

    for (let i = start; i <= strLen - searchLen; i++) {
        let found = true;

        for (let j = 0; j < searchLen; j++) {
            if (str[i + j] !== searchStr[j]) {
                found = false;
                break;
            }
        }

        if (found) return i;
    }
    return -1;
}
// console.log(stringIndexOf(string,"r",0));



// 6. String.includes()   -->  "".includes(searchString, start)

const stringIncludes = (str, searchString, position = 0) => {
    // Ensure the position is within bounds
    if (position < 0) position = 0;

    for (let i = position; i < str.length; i++) {
        // Loop through the string, checking for the substring match
        let found = true;
        for (let j = 0; j < searchString.length; j++) {
            if (str[i + j] !== searchString[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}
// console.log(stringIncludes(string,"r",0));

//  7. String.toLowerCase()  
const stringToLowerCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        // A-Z => a-z on adding 32 to ASCII value
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(code + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
// console.log(stringToLowerCase(string));


//   8. String.toUpperCase() 

const stringToUpperCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        // A-Z => a-z on adding 32 to ASCII value
        if (code >= 90 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}
// console.log(stringToUpperCase(string));









