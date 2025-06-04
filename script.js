// ES6 Modular JavaScript. 
// npm install trackjs --save

import { TrackJS } from 'trackjs';
TrackJS.install({
  token: "920675096ee448ebba53721364246bfb",
  application: "lab-9"
  // for more configuration options, see https://docs.trackjs.com
});

class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputError";
  }
}

window.onerror = function(errmessage, url, line) {
      console.error("Global Error found: ", errmessage, "\nat: ", url, "\nLine: ", line);
      return true;
}

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  
  try {
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new InputError("Both inputs must be valid numbers.");
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (e) {
    console.error(e.message);
  } finally {
    console.log("Form attempted.");
  }

});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
errorBtns[0].addEventListener("click", () => {
  console.log("Console Log");
});

errorBtns[1].addEventListener("click", () => {
  console.error("Console Error");
});

errorBtns[2].addEventListener("click", () => {
  console.count("Console Count");
});

errorBtns[3].addEventListener("click", () => {
  console.warn("Console Warn");
});

errorBtns[4].addEventListener("click", () => {
  console.assert(1 + 1 === 3, "Console Assert");
});

errorBtns[5].addEventListener("click", () => {
  console.clear();
});

errorBtns[6].addEventListener("click", () => {
  const test = {
    name: "Lab 9",
    author: "UCSD CSE",
    level: "Intermediate"
  };
  console.dir(test);
});

errorBtns[7].addEventListener("click", () => {
  console.dirxml(document.body);
});

errorBtns[8].addEventListener("click", () => {
  console.group("Grouped Logs");
  console.log("Log");
  console.warn("Warning");
});

errorBtns[9].addEventListener("click", () => {
  console.groupEnd();
});

errorBtns[10].addEventListener("click", () => {
  console.table([
    { id: 1, task: "Form", done: true },
    { id: 2, task: "Norm", done: false },
    { id: 3, task: "Proform", done: false }
  ]);
});

errorBtns[11].addEventListener("click", () => {
  console.time("myTimer");
});

errorBtns[12].addEventListener("click", () => {
  console.timeEnd("myTimer");
});

errorBtns[13].addEventListener("click", () => {
  console.trace("Trace Stack:");
});

errorBtns[14].addEventListener('click', () => {
  TrackJS.track();
  console.log('uh oh');
  throw new Error('Big error');
});