//Order 1
const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');

//used getAttribute to retrieve the value of a specified attribute of an HTML element
biscuits1.innerText = order1.getAttribute('data-biscuits');
donuts1.innerText = order1.getAttribute('data-donuts');
pancakes1.innerText = order1.getAttribute('data-pancakes');
status1.innerText = order1.getAttribute('data-delivered');


//Order 2
const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

biscuits2.innerText = order2.getAttribute('data-biscuits');
donuts2.innerText = order2.getAttribute('data-donuts');
pancakes2.innerText = order2.getAttribute('data-pancakes');
status2.innerText = order2.getAttribute('data-delivered');


//Order 3
const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector('.biscuits .count');
const donuts3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

biscuits3.innerText = order3.getAttribute('data-biscuits');
donuts3.innerText = order3.getAttribute('data-donuts');
pancakes3.innerText = order3.getAttribute('data-pancakes');
status3.innerText = order3.getAttribute('data-delivered');
