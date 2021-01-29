// This format was inspired by the class code

(function () {
  "use strict";

  let word = undefined;
  let func = false;
  let preVal;

  function handleOp() {
    let curVal = document.getElementById("calc-screen-text").innerHTML;
    switch (word) {
      case "add":
        let sum = parseFloat(preVal) + parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = sum.toString();
        break;
      case "sub":
        let dif = parseFloat(preVal) - parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = dif.toString();
        break;
      case "mult":
        let prod = parseFloat(preVal) * parseFloat(curVal);
        document.getElementById("calc-screen-text").innerHTML = prod.toString();
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

  function handleClick(e) {
    let val = e.target.innerHTML;
    switch (val) {
      case "+=":
        if (func) {
          handleOp();
        }
        word = "add";
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
          if (curText === "0" || func) {
            document.getElementById("calc-screen-text").innerHTML = val;
          } else {
            document.getElementById("calc-screen-text").innerHTML += val;
          }
        } catch (err) {
          console.log(err);
        }
    }
  }

  function init() {
    let arr = document.getElementsByTagName("th");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("click", handleClick);
    }
  }

  window.addEventListener("load", init, false);
})();
