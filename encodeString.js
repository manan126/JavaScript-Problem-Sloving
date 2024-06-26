//  Encode a String to Base64


function encodeToBase64(inputText) {
    // The btoa() function encodes a string in base-64
    return btoa(inputText);
  }
  
  let originalText = "Lelouch V Britania";
  let encodedText = encodeToBase64(originalText);
  
  
  console.log("Original Text:", originalText);
  console.log("Encoded Text:", encodedText); 