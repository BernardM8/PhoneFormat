
export const formatPhoneNumber=(input,cursorPosition)=>{

  let formattedValue = '';
  let value = input.replace(/\D/g, ``)

  //console.log("input=",input);
  //console.log("value.length=",value.length)
  //console.log("cursorPosition=",cursorPosition);

  let areaCode=value.slice(0,3)
  let middle=value.slice(3,6)
  let last=value.slice(6,10)

  if (value.length <= 3) {
    formattedValue = areaCode.replace(/\D/g, ``);
  } else if (value.length === 4) {
    if (input[0] === "(") {
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``);
    } else {
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``);
      cursorPosition = 7;
    }
  } else if (value.length >= 4 && value.length <= 6) {
    formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``);
  } else if (value.length === 7) {
    if (input[6] === "-" || input[7] === "-" || input[8] === "-" || input[9] === "-") {
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``) + `-` + last.replace(/\D/g, ``);
    } else {
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``) + `-` + last.replace(/\D/g, ``);
      cursorPosition += 1;
    }
  } else if (value.length >= 7) {
    if (input[8]=="-"){
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``) + `-` + last.replace(/\D/g, ``);
    }else{
      formattedValue = `(` + areaCode.replace(/\D/g, ``) + `) ` + middle.replace(/\D/g, ``) + `-` + last.replace(/\D/g, ``);
      cursorPosition += 1;
    }
  }
  return [formattedValue, cursorPosition];
}
