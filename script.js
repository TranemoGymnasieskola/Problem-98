let allText   = undefined;

function readTextFile(file) {

    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if ( rawFile.readyState === 4 ) {
            if ( rawFile.status === 200 || rawFile.status == 0 ) {
                allText = rawFile.responseText;
                // alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile('words.txt');
let words = allText.split(',');
let squares  = [];
let square   = undefined;
for ( i=0; i<100000; i++) {
    squares.push(i ** 2)
}

// Compare 2 words
function isAnagram(w1, w2) {
  if (w1.length !== w2.length) {
    return false;
  }
  for (let char of w1) {
    // Find and remove char from w2
    let oldw2 = w2;
    w2 = w2.replace(char, "");
    if ( oldw2 === w2 ) {
      break;
    }
    // console.log(w2);
  }
  if ( w2.length ) {
    return false;
  }
  return true;
}

let i0 = 0,
    i1 = 5;

if ( isAnagram(words[i0], words[i1]) ) {
  // console.log(`${words[i1]} is an anagram of ${words[0]}`);
} else {
  // console.log(`${words[i1]} is NOT an anagram of ${words[0]}`);
}

let wordsToCheck = words;
let pairs = [];
let pairsIndex = -1;

while (wordsToCheck.length) {
  pairsIndex++;
  pairs[pairsIndex] = [ wordsToCheck[0] ];
  // Skip first word
  for (let i = 1; i < wordsToCheck.length; i++ ) {
    // console.log("Checking " + wordsToCheck[i] + ` i = ${i}`);
    if ( isAnagram(wordsToCheck[0], wordsToCheck[i]) ) {
      pairs[pairsIndex].push(wordsToCheck[i]);
      // console.log(wordsToCheck);
      wordsToCheck.splice(i, 1);
      i--;
      // console.log(wordsToCheck);
    }
  }
  wordsToCheck.shift();
}
// console.log(pairs);

pairs = pairs.filter( p => p.length > 1);

// Array of all words that are anagrams in arrays
console.log(pairs);

// running

let A = undefined;
let B = undefined;
let C = undefined;
let D = undefined;
let E = undefined;
let F = undefined;
let G = undefined;
let H = undefined;
let I = undefined;
let J = undefined;
let K = undefined;
let L = undefined;
let M = undefined;
let N = undefined;
let O = undefined;
let P = undefined;
let Q = undefined;
let R = undefined;
let S = undefined;
let T = undefined;
let U = undefined;
let V = undefined;
let W = undefined;
let X = undefined;
let Y = undefined;
let Z = undefined;

let words = allText.split(',');

// LOOPAR GENOM ORDEN
for ( i=0; i < 1786; i++ ) {
    let word   = words[i]
    word       = word.slice(1, -1);
    let length = word.length;
    // let pow     = (10 ** length) - 1;
    // let start   = 10 ** (length - 1);
    // LOOP SOM GÅR ÖVER KVADRATERNA TILL BOKSTÄVERNA
    for ( n of squares ) {
        if ( n > pow ) {
            break;
        }
        square = n;
        let numberStr = n.toString()
        // LOOPAR GENOM ORDET
        if ( numberStr.length === length ) { 
            for ( k = 0; k =< word.length; k++) {
                let letter = word.charAt(k)
                let number = square.charAt(k)
                // LOOP SOM GER VÄRDE ÅT  BOKSTÄVERNA
                for ( l = 0; l < length; l++ ) {
                    if (letter === 'A') {
                        A = numberStr
                    }
                    // se till att du kan göra om loopen utan att skriva över värdena
                }

            }
            
        }
        
    }

}







// ( j = start; j <= pow; j++ )