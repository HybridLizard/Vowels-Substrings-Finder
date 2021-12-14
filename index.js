// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Vowels Substrings Finder</h1>`;

function isVovel(letter) {
  return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

function findSubstring(str) {
  let counter = 0;
  const collection = new Set();
  const n = str.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (!isVovel(str[j])) {
        break;
      }
      collection.add(str[j]);

      if (collection.size === 5) {
        counter++;
      }
    }
    collection.clear();
  }

  return counter;
}

// Example
let str = 'aaeuiou';
const result = findSubstring(str);
console.log(result);

const div = document.createElement('div');
div.innerHTML = `Tested string: ${str}`;
appDiv.append(div);

const div2 = document.createElement('div');
div2.innerHTML = `Found substrings: ${result}`;
appDiv.append(div2);
