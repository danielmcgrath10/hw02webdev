// This format was inspired by the class code

(function () {
  "use strict";

  let word = undefined;
  let func = false;
  let preVal;

  // Handles the math behind the calculator by grabbing the function, 
  // the previous value, the current value input, and then replaces 
  // the screen with the proper result.
  function handleOp() {
    let curVal = document.getElementById("calc-screen-text").innerHTML;
    switch (word) {
      case "add":
        let sum = parseFloat(preVal) + parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = (sum > 100000000000000000n) ? 0 : sum.toString();
        break;
      case "sub":
        let dif = parseFloat(preVal) - parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = (dif < -100000000000000000n) ? 0 :   dif.toString();
        break;
      case "mult":
        let prod = parseFloat(preVal) * parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = (prod > 100000000000000000n) ? 0 :  prod.toString();
        break;
      case "div":
        let quot = parseFloat(preVal) / parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = quot.toString();
        break;
      default:
        console.log(word, preVal, curVal);
        alert("This is never supposed to happen");
        break;
    }
  }

  // Click handler for the calculator.
  // Makes the calculator perform the correct operation when clicked.
  function handleClick(e) {
    let val = e.target.innerHTML;
    switch (val) {
      case "+=":
        if (func) {
          handleOp();
        }
        word ? undefined : word = "add";
        func = true;
        preVal = document.getElementById("calc-screen-text").innerHTML;
        break;
      case "-":
        if (func && !word) {
          handleOp();
        }
        word = "sub";
        func = true;
        preVal = document.getElementById("calc-screen-text").innerHTML;
        break;
      case "x":
        if (func && !word) {
          handleOp();
        }
        word = "mult";
        func = true;
        preVal = document.getElementById("calc-screen-text").innerHTML;
        break;
      case "/":
        if (func && !word) {
          handleOp();
        }
        word = "div";
        func = true;
        preVal = document.getElementById("calc-screen-text").innerHTML;
        break;
      case ".":
        if (
          !document.getElementById("calc-screen-text").innerHTML.includes(".")
        ) {
          document.getElementById("calc-screen-text").innerHTML += ".";
        }
        break;
      case "C":
        document.getElementById("calc-screen-text").innerHTML = "0";
        word = undefined;
        func = false;
        break;
      default:
        try {
          let curText = document.getElementById("calc-screen-text").innerHTML;
          if (curText.length >= 18) {
            break;
          }
          if (curText === "0" || preVal === curText) {
            document.getElementById("calc-screen-text").innerHTML = val;
          } else {
            document.getElementById("calc-screen-text").innerHTML += val;
          }
        } catch (err) {
          console.log(err);
        }
    }
  }

  // Loops through the th tags on load and adds a click event listener that
  // is set up to pass the event to the function so that we don't need any identifiers
  // because the item being clicked passes itself.
  function init() {
    let arr = document.getElementsByTagName("th");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", handleClick);
    }
  }

  window.addEventListener("load", init, false);
})();
