// //function addthreenumbers(a,b,c) {

// //    return a+b+c;
// //}
// //d = addthreenumbers(10,20,30);

// //console.log(d);

// //if (9>10) {
// //    console.log ("good day");
// //} else if (10<11){
//  //   console.log("this is also nice")
// //} 

// //else {
//  //   console.log ("this is wrong")
// //}
// //if (10>11) {
//   //  e = addthreenumbers(10,20,30);
//    // console.log(e);
// //} else {
//  //   console.log("the function is wrong");
// //}

// // function multiplication(a, b) {
// //     return a * b;
// //   }
  
// //   function subtraction(a, b) {
// //     return a - b;
// //   }
  
// //   function division(a, b) {
// //     return a / b;
// //   }
  
// //   function addition(a, b) {
// //     return a + b;
// //   }
  
// //   const prompt = require("prompt-sync")();
  
// //   const firstNumber = parseFloat(prompt("Please enter your first number: "));
// //   const secondNumber = parseFloat(prompt("Please enter your second number: "));
  
// //   if (isNaN(firstNumber) || isNaN(secondNumber)) {
// //     console.log("Please enter valid numbers!");
// //   } else {
// //     const operation = prompt(
// //       "Please enter the operation you want to perform (+, -, *, /): "
// //     );
  
// //     let result;
  
// //     switch (operation) {
// //       case "+":
// //         result = addition(firstNumber, secondNumber);
// //         console.log(result);
// //         break;
// //       case "-":
// //         result = subtraction(firstNumber, secondNumber);
// //         console.log(result);
// //         break;
// //       case "*":
// //         result = multiplication(firstNumber, secondNumber);
// //         console.log(result);
// //         break;
// //       case "/":
// //         result = division(firstNumber, secondNumber);
// //         console.log(result);
// //         break;
// //       default:
// //         console.log("Invalid operation!");
// //         break;
// //     }
// //   }
// // 

// function calculate() {
//   var firstNumber = parseFloat(document.getElementById("first-number").value);
//   var secondNumber = parseFloat(document.getElementById("second-number").value);
//   var operation = document.getElementById("operation").value;
  
//   if (operation === "+") {
//     var result = firstNumber + secondNumber;
//     document.getElementById("add").innerHTML = alert(result);
//   } else if (operation === "-") {
//     var result = firstNumber - secondNumber;
//     document.getElementById("sub").innerHTML = alert(result);
//   } else if (operation === "*") {
//     var result = firstNumber * secondNumber;
//     document.getElementById("mul").innerHTML = alert(result);
//   } else if (operation === "/") {
//     var result = firstNumber / secondNumber;
//     document.getElementById("div").innerHTML = alert(result);
//   } else {
//     alert("Invalid operation");
//   }
// }
function calculate(operation) {
  var firstNumber = parseFloat(document.getElementById("first-number").value);
  var secondNumber = parseFloat(document.getElementById("second-number").value);
  var result;
  
  if (operation === "+") {
    result = firstNumber + secondNumber;
    document.getElementById("result").innerHTML = "Result: " + result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    document.getElementById("result").innerHTML = "Result: " + result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    document.getElementById("result").innerHTML = "Result: " + result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    document.getElementById("result").innerHTML = "Result: " + result;
  } else {
    alert("Invalid operation");
  }
}

