let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//Checking if a variable named calculated is a string or not.
const logCalc = () => { 
    const isString = typeof calculated === 'string'        
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated         //Converting the string to a number
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc()                                   //calling the logCalc function
  if (calculated > 2) user = 'John'               //checks if calculated user is greater than 2 and 
  if (calculated > 2) state = 'requesting'        //sets the state variable to requesting
  if (calculated > 3) state = 'idle'              // sets the state variable to the string 'idle'.
}

//Checking if the user variable exists and if the state variable is equal to the string 'requesting'.
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()



// let status = 'idle';
// let user = null;
// let calculated = 1;

// const logCalc = () => { 
//     const isString = typeof calculated === 'string' && !isNaN(calculated);
//     const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
//     calculated = calculatedAsNumber + 1;
// }

// const calcUser = () => {
//   logCalc();
//   if (calculated > 2) {
//     user = 'John';
//     status = 'requesting';
//   }
//   if (calculated > 3) {
//     status = 'idle';
//   }
// }

// const checkUser = () => {
//   if (user && status === 'requesting') {
//     console.log(`User: ${user} (${calculated})`);
//   }
// }

// checkUser();
// calcUser();

// checkUser();
// calcUser();

// checkUser();
// calcUser();

// checkUser();
// calcUser();

// checkUser();
// calcUser();
