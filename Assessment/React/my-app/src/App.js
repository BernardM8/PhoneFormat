import React, {useRef, useState } from 'react';
import {formatPhoneNumber} from "./formatPhone"
import './style.css';

function App() {
  const inputRef = useRef(null);
  const [phoneNum, setPhoneNum] = useState ("");

  const handleChange = (event) => {
    const { value } = event.target;
    cursorPosition = inputRef.current.selectionStart;
    
    if (value.length<15 ){
      var [formattedValue, cursorPosition] = formatPhoneNumber(value);
      setPhoneNum(formattedValue);
      if (!cursorPosition){
        cursorPosition = inputRef.current.selectionStart;
      }
      //console.log("cursorPosition = ",cursorPosition);
      inputRef.current.value = formattedValue;
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }else{ //doesn`t run formatPhoneNumber function since value is full 
      inputRef.current.value = phoneNum;
      inputRef.current.setSelectionRange(cursorPosition-1, cursorPosition-1);
    }
  };


  return (
        <div className="container text-center">
            <input 
              type ="text" 
              value={phoneNum} 
              onChange={handleChange} 
              maxLength="16" 
              placeholder="mobile number" 
              autoComplete="off" 
              ref={inputRef}
            />
            <div><label htmlFor="phone">(123) 456-7890</label></div>
        </div>
  );
}

export default App;
