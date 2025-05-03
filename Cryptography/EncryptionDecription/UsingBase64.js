// Encryption Decryption Using Base64

const secret = "l02rmIJnnf0u";
// Test Data
const text = "Hello JavaScript Users"
const base64String = "SGVsbG8gSmF2YVNjcmlwdCBVc2Vycw=="


// Function to Encode Simple text to Base64 String 
const encodeFunction = async (text, secret) => {
    try {
        const response = await fetch(`https://api.thebase64.com/encode?secret=${secret}`,
            {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: text
            }
        );

        // Response has Promise so it has to be resolved
        const { result } = await response.json();
        // console.log("Encoded Text : "+ result);
        return result;
    } catch (error) {
        console.error("Encoding Error:", error.message);
    }
}
// Test the encodeFunction()
// encodeFunction(text,secret)


// Function to Decode Base64 String to  Simple text

const decodeFunction = async (base64String, secret) => {
    try {
        const response = await fetch(`https://api.thebase64.com/decode?secret=${secret}`,
            {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: base64String
            }
        );
        // Response has Promise so it has to be resolved
        const { result } = await response.json()
        // console.log("Decoded Text : " +result);
        return result;
    } catch (error) {
        console.error("Decoding Error:", error.message);
    }
}
// Test the decodeFunction()
// decodeFunction(base64String,secret)


//  Function to authenticate the Text .
const authenticateFunction = async (textInput, storedBase64Text, secret) => {
    try {
        // First Encode the textInput 
        const encodedTextInput = await encodeFunction(textInput, secret)
        // it returns boolean value
        return encodedTextInput === storedBase64Text;

    } catch (error) {
        console.error("Authentication Error:", error.message);
        return false
    }
}

// Test the Authenticate Function 
const isMatched = authenticateFunction(text, base64String, secret);
console.log(isMatched ? "Authentication Successful" : "Authentication Failed");



