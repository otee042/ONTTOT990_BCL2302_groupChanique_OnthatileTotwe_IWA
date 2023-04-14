const order1 = document.querySelector('[.date-key = "order1"]');        //ORDER 1
const biscuits1 = document.querySelector('[.data-biscuits="10"]');
const donuts1 = document.querySelector('[.data-donuts = "13"]');
const pancakes1 = document.querySelector('[.pancakes = "0"]');
const status1 = document.querySelector('[.status]');                 //status for status order 1

//ORDER 2
const root2 = document.querySelector('[.data-key="order2"]');
const biscuits2 = document.querySelector('[.data-biscuits="5" ]');
const donuts2 = document.querySelector('[.data-donuts="0"]');
const pancakes2 = document.querySelector('[.data-pancakes="2"]');
const status2 = document.querySelector('[.status dd]');                        //status for order 2

//ORDER 3
const root3 = document.querySelector('[.data-key="order3" ]');
const biscuits3 = document.querySelector('[.data-biscuits="12"]');
const donuts3 = document.querySelector('[.data-donuts="11" ]');
const pancakes3 = document.querySelector('[.data-pancakes ="15" ]');
const status3 = document.querySelector('[.status  dd]');                 //status for order 3

biscuits1.innerText = biscuits1.getAttribute('[.data-biscuits="10"]');
donuts1.innerText = donuts1.getAttribute('[.data-donuts = "13"]');
pancakes1.innerText = pancakes1.getAttribute('[.data-pancakes="2"]')                 

/*1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending*/
 

 

