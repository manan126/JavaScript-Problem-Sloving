// Count the Number of Vowels in a String

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
//     for (let word of str) {
//       if (vowels.includes(word)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const str = "Manan Sharma";
//   const vowelCount = countVowels(str);
//   console.log(vowelCount)



// New approach using Regix
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches.length
  }
  
  
  console.log(countVowels("Monkey D Luffy")); 