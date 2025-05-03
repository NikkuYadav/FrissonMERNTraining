// MD5 Hashing using Hashify API


const md5Hashing = async (text) => {
    try {
      const response = await fetch('https://api.hashify.net/hash/md5/hex', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: text
      });
      
      const {Digest}= await response.json();
     // console.log(Digest);
      
      return Digest;
    } catch (error) {
      console.error("MD5 Hash Error:", error.message);
    }
  };
  
  // Check for Output
  //md5Hashing("Hello")

// Authentication Function using MD5
  const authenticateMD5 = async (textInput, storedMD5Hash) => {
    try {
      // First Hash the textInput 
      const hashedInput = await md5Hashing(textInput);
       // then returns boolean value
      return hashedInput === storedMD5Hash;
    } catch (error) {
      console.error("Authentication Error:", error.message);
      return false;
    }
  };



// Test the Authenticate Function 

const text = "Hello"
const storedMD5Hash = "8b1a9953c4611296a827abf8c47804d7"
const isMatched = authenticateMD5(text, storedMD5Hash);
console.log(isMatched ? "Authentication Successful" : "Authentication Failed");
  
  
  