
export const formatPhoneNumber=(input)=>{

  let formattedValue = '';
  let cursorPosition;

  //console.log("input=",input);
  let value = input.replace(/\D/g, ``)
  //console.log("value=",value);
  //console.log("value.length=",value.length)
  
  let areaCode=value.slice(0,3)
  let middle=value.slice(3,6)
  let last=value.slice(6,10)


  //adding first three digits
  if(value.length<=3){
    formattedValue = areaCode.replace(/\D/g, ``);
  //adding braces at fourth digit  
  }else if(value.length==4){
    if(input[0]=="(" ){//for cursor position behavior per Question 2
      formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``);
    }else{//for cursor position behavior per Question 2
      formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``);
      cursorPosition = 7;
    }
  //adding digits in the middle  
  }else if(value.length>=4 && value.length<=6){
    formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``);
  //adding "-" at the seventh digit
  }else if(value.length==7 ){//for cursor position behavior per Question 2
    if(input[6]=="-" |input[7]=="-" |input[8]=="-" | input[9]=="-"){
      formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``)+`-`+last.replace(/\D/g, ``);
    }else{//for cursor position behavior per Question 2
      cursorPosition = 11;
      formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``)+`-`+last.replace(/\D/g, ``);
    }
  //adding digits in the last section  
  }else if(value.length>=7 ){
    formattedValue = `(`+areaCode.replace(/\D/g, ``)+`) `+middle.replace(/\D/g, ``)+`-`+last.replace(/\D/g, ``);
  }  
  return [formattedValue, cursorPosition];
}
