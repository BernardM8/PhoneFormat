import {formatPhoneNumber} from "./formatPhone";

test(`test format ` , () =>{
    const input = "1";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("1");
    expect(result[1]).toBeUndefined();
}) 

test(`test format ` , () =>{
    const input = "12";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("12");
    expect(result[1]).toBeUndefined();
}) 

test(`test format braces and space` , () =>{
    const input = "1234";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 4");
    expect(result[1]).toBe(7);
}) 

test(`test format braces and space` , () =>{
    const input = "(123) 4";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 4");
    expect(result[1]).toBeUndefined();
}) 

test(`test format ` , () =>{
    const input = "(123) 45";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 45");
    expect(result[1]).toBeUndefined();
}) 

test(`test format without -` , () =>{
    const input = "(123) 456";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456");
    expect(result[1]).toBeUndefined();
}) 

test(`test format addition -` , () =>{
    const input = "(123) 4567";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7");
    expect(result[1]).toBe(11);
}) 

test(`test format` , () =>{
    const input = "(123) 456-78";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-78");
    expect(result[1]).toBeUndefined();
}) 

test(`test format` , () =>{
    const input = "(123) 456-789";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-789");
    expect(result[1]).toBeUndefined();
}) 

test(`test full phone number format` , () =>{
    const input = "(123) 456-7890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7890");
    expect(result[1]).toBeUndefined();
}) 

test(`test excessive numbers input` , () =>{
    const input = "(123) 456-78905";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7890");
    expect(result[1]).toBeUndefined();
}) 

test(`test removal of  7` , () =>{
    const input = "(123) 456-";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456");
    expect(result[1]).toBeUndefined();
}) 

test(`test delete 4` , () =>{
    const input = "(123) ";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("123");
    expect(result[1]).toBeUndefined();
}) 

test(`test removal of curly braces on delete 3` , () =>{
    const input = "(12)";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("12");
    expect(result[1]).toBeUndefined();
    
}) 


//Question2 test cases
test(`test addition in curly braces` , () =>{
    const input = "(1234) 567-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7890");
    expect(result[1]).toBeUndefined();
}) 
test(`test addition in curly braces` , () =>{
    const input = "(1234) 567";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7");
    expect(result[1]).toBe(11);
}) 
test(`test addition in curly braces` , () =>{
    const input = "(1234) 5";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 45");
    expect(result[1]).toBeUndefined();
}) 
test(`test addition in middle` , () =>{
    const input = "(123) 4567-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-7890");
    expect(result[1]).toBeUndefined();
}) 
test(`test addition in middle` , () =>{
    const input = "(123) 4567-8";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 456-78");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete in curly braces` , () =>{
    const input = "(12) 567-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(125) 678-90");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete in curly braces`  , () =>{
    const input = "(12) 567-8";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(125) 678");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete in curly braces`  , () =>{
    const input = "(12) 567";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(125) 67");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete of space`  , () =>{
    const input = "(123)56";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 56");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete of space`  , () =>{
    const input = "(123)567-89";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567-89");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete first cursor`  , () =>{
    const input = "123) 56";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 56");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete first cursor`  , () =>{
    const input = "123) 567-89";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567-89");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete last cursor`  , () =>{
    const input = "(123 567";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete last cursor`  , () =>{
    const input = "(123 567-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567-890");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete middle `  , () =>{
    const input = "(123) 56-78";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567-8");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete middle`  , () =>{
    const input = "(123) 57-";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 57");
    expect(result[1]).toBeUndefined();
}) 
test(`test delete middle`  , () =>{
    const input = "(123) 56-7890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 567-890");
    expect(result[1]).toBeUndefined();
}) 
test(`test entry before cursor`  , () =>{
    const input = "2(123) 456-789";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(212) 345-6789");
    expect(result[1]).toBeUndefined();
}) 
test(`test entry before cursor`  , () =>{
    const input = "2(123) 45";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(212) 345");
    expect(result[1]).toBeUndefined();
}) 

test(`test excess entry in middle`  , () =>{
    const input = "(123)1 167-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 116-7890");
    expect(result[1]).toBeUndefined();
}) 

test(`test multiple deletes`  , () =>{
    const input = "()1 167-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(116) 789-0");
    expect(result[1]).toBeUndefined();
}) 

test(`test multiple deletes`  , () =>{
    const input = "(-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("890");
    expect(result[1]).toBeUndefined();
}) 

test(`test excess deletes`  , () =>{
    const input = "(12367-890";
    const result = formatPhoneNumber(input);
    expect(result[0]).toBe("(123) 678-90");
    expect(result[1]).toBeUndefined();
}) 