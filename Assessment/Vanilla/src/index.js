import {formatPhoneNumber} from "./formatPhone.js";

//event listener that implements format phone function
var input = document.getElementById("phone");

input.addEventListener("input", function (event) {
  var value = input.value;
  var cursorPosition = input.selectionStart;

  //console.log("value= ",value);
  //console.log("value.length= ",value.length);

  if (value.length<=14 ){
  var [formattedValue, cursorPos] = formatPhoneNumber(value,cursorPosition);
    input.value = formattedValue;
    console.log("cursorPos =",cursorPos);
    input.setSelectionRange(cursorPos , cursorPos);
  }else{//doesn`t run formatPhoneNumber function since value is full 
      input.value = value;
  }
});

