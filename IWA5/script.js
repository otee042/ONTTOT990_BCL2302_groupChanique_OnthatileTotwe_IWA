const FREE_WARNING = 'Free shipping only applies to single orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0;
let customers = '1';
let location = 'RSA';
let currency = 'R';
let shoes = 300 * 1 ;
let toys = 100 * 5;         
let shirts = 150 * NONE_SELECTED ;
let batteries = 35 * 2;         
let pens = 5 * NONE_SELECTED    //
let price =  shirts + shoes + batteries + toys + pens + shipping   //combined the costs and declared them as price
let calcShipping = undefined;        


if (location ) { 
    shipping = 400 && currency
    if (price >= 1000 && customers == 1){
        shipping = 0
    }

}

if (location = 'NAM') {           //declared location as NAM
    shipping === 600  &&  currency === '$'
} if (price >= 60 && customers == 1) {                                    //for other countries
    shipping = 0
}

if (price >= 1000 && location === 'NAM' ) {
		}else {
            shipping = calcShipping
        }

if (shipping === 0 && customers !== 1) { 
    console.warn(FREE_WARNING) 
} else if (location === 'NK') {
    console.log(BANNED_WARNING)  
} else {
    console.log('price', currency , price) 
}

