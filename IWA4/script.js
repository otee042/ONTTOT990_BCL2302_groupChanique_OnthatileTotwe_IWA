const year= '2050'                              //used the correct syntax
const status= 'parent'                          //changed the status of student to parent
let count = 0                                   //declaration of count of holidays 

if (year) {										// changed the date to year to
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4                              //counting of holidays

	if (status == "student") {                     
	  console.log('June', 'Youth Day')
	  count = count + 1                             //removed the "let" as it has already been declared 
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (status == "parent") {
	  console.log(date, 'Christmas Day')
	 count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', year)						//changed the date to year
console.log('The total holidays is:', count)