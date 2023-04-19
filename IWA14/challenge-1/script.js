let firstName = 'John';     //declared my variables using let
let age = 35;
let hobby = 'Coding';


//Declared a constant logTwice which is a function that takes a parameter and log it to the console twice
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

//Declare a constant operate which is a function that logs a message to the console by taking logTwice 
const operate = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

operate();

