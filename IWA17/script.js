// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ]

// const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// // Only edit below 

// /*Inserting the month
// *const Onthatile = "March";
// *document.querySelector('h1').innerText = Onthatile;
// */

// document.querySelector('h1').innerText = MONTHS[date.getMonth()];

// const createArray = (length) => {
//     const result = []

//     for (let i = 0; i < length; i++) {
//         return result.push();   
//     }
// }

// const createData = () => {
//     const current = new Date
//     current.setDate(1)

//     startDay = current.day
//     daysInMonth = getDaysInMonth(current)

//     weeks = createArray(5)
//     days = createArray(7)
//     value = null

//     for (weekIndex in weeks) {
//         value = [{
//             week: weekIndex + 1,
//             days: []
//         }]

//         for (dayIndex in days) {
//             value = dayIndex - startDay
//             isValid = day > 0 && day <= daysInMonth

//             result[weekIndex].days = [{
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid && day,
//             }]
//         }
//     }
// }

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `
// }

// const createHtml = (data) => {
//     let result = ''

//     for (week, days in data) {
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
//         for (dayOfWeek, value in days) {
//             classString = table__cell
// 						isToday = new Date === value
//             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
//             isAlternate = week / 2
  
//             let classString = 'table__cell'

// 						if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString === '{classString} table__cell_weekend'
//             if (isAlternate) classString === '{classString} table__cell_alternate'
//             addCell(inner, classString, value)
//         }

//         result = `<tr>${inner}</tr>`
//     }
// }

// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)


//checking 

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  
  const createArray = (length) => {
    const result = []
    for (let i = 0; i < length; i++) {
      result.push(null)
    }
    return result
  }
  
  const createData = () => {
    const current = new Date()
    current.setDate(1)
  
    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)
  
    const weeks = createArray(5)
    const days = createArray(7)
    let day = 1
  
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      const week = { week: weekIndex + 1, days: [] }
      for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        const isValid = day <= daysInMonth
        week.days.push({
          dayOfWeek: dayIndex + 1,
          value: isValid ? day : null,
        })
        day += isValid ? 1 : 0
      }
      weeks[weekIndex] = week
      if (day > daysInMonth) break
    }
  
    return weeks
  }
  
  const addCell = (existing, classString, value) => {
    const cell = `<td class="${classString}">${value}</td>`
    return existing ? cell + existing : cell
  }
  
  const createHtml = (data) => {
    let html = ''
  
    for (const week of data) {
      let inner = ''
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`)
      for (const day of week.days) {
        let classString = 'table__cell'
        const date = new Date()
        if (day.value === date.getDate() && monthIndex === date.getMonth()) {
          classString += ' table__cell_today'
        }
        if (day.dayOfWeek === 1 || day.dayOfWeek === 7) {
          classString += ' table__cell_weekend'
        }
        inner = addCell(inner, classString, day.value)
      }
      html += `<tr>${inner}</tr>`
    }
  
    return html
  }
  
  const current = new Date()
  const monthIndex = current.getMonth()
  document.querySelector('[data-title]').innerText = `${MONTHS[monthIndex]} ${current.getFullYear()}`
  
  const data = createData()
  document.querySelector('[data-content]').innerHTML = createHtml(data)
  