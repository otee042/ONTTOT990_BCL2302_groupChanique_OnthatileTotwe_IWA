const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//cecking if the an item has been assigned to the futureId
if(holidays.futureId) {
    console.log(holidays.futureId.name)
} else{
    console.log(`ID ${futureId} not created yet`)
}

//changing the time of the value6
const copied = {
    6: {
        id: 6,
        name: 'X-mas',
        date: new Date(`25 December ${currentYear} 00:00`),

}
}

//checking for earlier date
const correctDate = copied
if(copied[6].date < holidays[6].date) {
    console.log('New date earlier: true')
} else{
    console.log('false')
}

if(copied[6].id == holidays[6].id) {
    console.log('ID change: false')
} else{
    console.log(copied[6].id)
}

if(holidays[6].name == copied[6].name) {
    console.log('Name change: false')
} else{
    console.log(`Name change: ${copied[6].name}`)
}
if(holidays[6].date == copied[6].date) {
    console.log('Date change: false')
}else{
    console.log(`Date change: ${copied[6].date}`)
}

//Convert the date to milliseconds to be able to get a min value and max value
    const  holidays0 = Date.parse(holidays[0].date)
    const  holidays1 = Date.parse(holidays[1].date)
    const  holidays2 = Date.parse(holidays[2].date)
    const  holidays3 = Date.parse(holidays[3].date)
    const  holidays4 = Date.parse(holidays[4].date)
    const  holidays5 = Date.parse(holidays[5].date)
    const  holidays6 = Date.parse(holidays[6].date)
    const  holidays7 = Date.parse(holidays[7].date)
    const  holidays8 = Date.parse(holidays[8].date)

    const firstHolidayTimestamp = Math.min(
        holidays0,
        holidays1,
        holidays2,
        holidays3,
        holidays4,
        holidays5,
        holidays6,
        holidays7,
        holidays8,
    )

    const lastHolidayTimestamp = Math.max(
        holidays0,
        holidays1,
        holidays2,
        holidays3,
        holidays4,
        holidays5,
        holidays6,
        holidays7,
        holidays8,
    )

    //for first holiday
    const firstDay = new Date(firstHolidayTimestamp)
    const earlyDay = firstDay.getDate()
    const firstMonth = firstDay.getMonth()
    console.log(`${earlyDay} / ${firstMonth + 1} / ${currentYear}`)

    //for last holiday
    const lastDay = new Date(lastHolidayTimestamp)
    const lateDay = lastDay.getDate()
    const lastMonth = lastDay.getMonth()
    console.log(`${lateDay} / ${lastMonth + 1} / ${currentYear} `)

    //for random holiday
    const randomHoliday = new Date(Math.random(holidays[0].date , holidays[1].date))
    console.log(randomHoliday)
    




/*copied = holidays.christmas
copied = { name: 'X-mas Day' }
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = new Date(firstHolidayTimestamp)
const lastDay = new Date(lastHolidayTimestamp)
console.log(firstDay , lastDay)
/*const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)*/
