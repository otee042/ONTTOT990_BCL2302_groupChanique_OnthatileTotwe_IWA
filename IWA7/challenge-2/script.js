const nickname = "Timmy";
const firstname = "Timothy";
const twoNames = nickname + firstname
const message = "Good Morning";

if (twoNames){
    console.log(` Good Morning , ${nickname || firstname} `)
} 