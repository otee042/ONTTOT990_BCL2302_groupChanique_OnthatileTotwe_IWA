/*const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
const FREE_WARNING = 'Free shipping only applies to single orders'

const customers = 1
//let location = 'RSA';
let currency = null
let shipping = 400 

let shoes = 300 * 1 
let toys = 100 * 5;       
let shirts = 150 * NONE_SELECTED 
let batteries = 35 * 2       
let pens = 5 * NONE_SELECTED    //
let price =  shirts + shoes + batteries + toys + pens + shipping   //combined the costs and declared them as price
//let calcShipping = undefined;        


if (location === 'RSA' ) { 
    shipping = 400 
    currency === 'RSA'
}

else if (location === 'NAM') {           //declared location as NAM
    shipping = 600  
    currency == '$'
}

else if (location === "NK" ) {
    shipping = null 
    currency = null
    console.log(BANNED_WARNING)  
}
else {       //for other countries
    shipping = 800 
    currency === '$'
}

if (price >= 1000) {
    if(customers === 1 && (location === 'RSA' || location === 'NAM') )
    shipping = 0
    //console.log(FREE_WARNING)
}

console.log('R' , price ) */

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
/* if (location == RSA) {
    shipping = 400 && currency === 'R';
}
if (location == NAM) {
    shipping = 600;
}else {
    shipping = 800;
}; */
const shoes = 300 * 1;
const toys = 100 * 7;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
const customers = 2;
const location = 'NAM';
const currencyConverter = 1/16.67
/* const currency = 'R'; */
const cost = shoes + batteries + pens + shirts + toys;
const shipping = 0;
/* currency = '$'; */
if ((cost >= 1000) && (location == 'NAM' || location == 'RSA') && (customers == 1) ) {
    const shipping = 0;
    totalCost = (cost + shipping).toFixed(2);
    if (location == 'RSA') {
        currency = 'R'
        console.log('price:',currency + totalCost);
    } else{
        currency = '$';
        console.log('price:',currency + (totalCost * currencyConverter));
    }
} else {
    if (customers != 1) {
        console.log(FREE_WARNING);
    }
    if (location == 'RSA') {
        currency = 'R';
        const shipping = 400;
        totalCost = (cost + shipping).toFixed(2);
        console.log('price:', currency + totalCost);
    } else if (location == 'NAM') {
        currency = '$';
        const shipping = 600;
        totalCost = (cost * currencyConverter) + shipping;
        console.log('price:', currency + totalCost);
    } else if (location == 'NK') {
        console.log(BANNED_WARNING);
    } else {
        currency = '$';
        const shipping = 800;
        totalCost = (cost * currencyConverter) + shipping;
        console.log('price:', currency + totalCost);
    }
};
/* if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }
location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping) */

