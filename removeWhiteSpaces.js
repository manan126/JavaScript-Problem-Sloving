// Remove white spaces from a Text


function removeWhiteSpaces(text) {
    return text.replace(/\s/g,'');
  }
  
 
  let originalText = "       Hello Everyone this text has several white spaces ";
  let newText = removeWhiteSpaces(originalText);
  

  console.log(newText); 