const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ( hourOfDay === 0 && minuteOfDay == 0) {
	const taxAsDecimal = parseFloat(tax) / 100
    const startingAfterTax = salary - (salary * taxAsDecimal)
	const balance = startingAfterTax - transport - food - rent 
    const currency = 'R'                            //declared 'R'

console.log(currency , balance.toFixed(2))
}

//hourOfDay === undefined && minuteOfDay === undefined && 