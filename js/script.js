// 1-MASALA-REVERSE:

let reverseName = "Alisher Qodirov";

function reverse(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverse(reverseName));




// 2-MASALA-Ildizlar:

function numberRoot(numberRoots) {
  let roots = [];

  for(let number of numberRoots) {
    if (Math.sqrt(number) % 1 == 0) {
      roots.push(Math.sqrt(number));
    }
    else {
      roots.push(number * number);
    }
  }
  return console.log(roots);
}
numberRoot([]);



// 3-MASALA-SRINGNI IKKITA QILIB QAYTARISH:
  
function stringLetters(strings) {
  let string = [];
  for (i = 0; i < strings.length; i++) {
    string += strings[i] + strings[i];
  }

  return string;
}

let resultString = stringLetters("")
console.log(resultString);
