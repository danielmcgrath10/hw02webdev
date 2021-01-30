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
    let elem = document.getElementById("calc-screen-text");
    switch (word) {
      case "add":
        let sum = parseFloat(preVal) + parseFloat(curVal);
        elem.innerHTML =
          sum > 100000000000000000n ? 0 : sum.toString();
        break;
      case "sub":
        let dif = parseFloat(preVal) - parseFloat(curVal);
        elem.innerHTML =
          dif < -100000000000000000n ? 0 : dif.toString();
        break;
      case "mult":
        let prod = parseFloat(preVal) * parseFloat(curVal);
        elem.innerHTML =
          prod > 100000000000000000n ? 0 : prod.toString();
        break;
      case "div":
        let quot = parseFloat(preVal) / parseFloat(curVal);
        elem.innerHTML = quot.toString();
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
    let screen = document.getElementById("calc-screen-text");
    switch (val) {
      case "+=":
        if (func) {
          handleOp();
        }
        word ? undefined : (word = "add");
        func = true;
        preVal = screen.innerHTML;
        break;
      case "-":
        if (func && !word) {
          handleOp();
        }
        word = "sub";
        func = true;
        preVal = screen.innerHTML;
        break;
      case "x":
        if (func && !word) {
          handleOp();
        }
        word = "mult";
        func = true;
        preVal = screen.innerHTML;
        break;
      case "/":
        if (func && !word) {
          handleOp();
        }
        word = "div";
        func = true;
        preVal = screen.innerHTML;
        break;
      case ".":
        if (
          !screen.innerHTML.includes(".")
        ) {
          screen.innerHTML += ".";
        }
        break;
      case "C":
        screen.innerHTML = "0";
        word = undefined;
        func = false;
        break;
      default:
        try {
          let curText = screen.innerHTML;
          if (curText.length >= 18) {
            break;
          }
          if (curText === "0" || preVal === curText) {
            screen.innerHTML = val;
          } else {
            screen.innerHTML += val;
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
