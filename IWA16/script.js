const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
const createHtml = (athlete) => {
  //  reassign the variables
  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const id = data.response.data[athlete].id;
  const races = (data.response.data[athlete].races).length
  const date = new Date(data.response.data[athlete].races[races-1].date)
  const time = data.response.data[athlete].races[races-1].time;
  const fragment = document.createDocumentFragment();              //Creating an empty DocumentFragment object.
  let title = document.createElement('h2');        //Creates an h2 HTML element              
  title.textContent = id                            //sets its text element to the id of the athlete
  fragment.appendChild(title);                      //append it to the document Fragment object
  //Creating a dl element to hold the athlete's information, and extract the day, month, and year from the date variable
  const list = document.createElement('dl');        
  const day =  date.getDate()                       
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  console.log(month)
   // calculating the total time of the athlete's latest race useing a loop to add up all the times
  let sum = 0   
  let i = 0;
  while ( i < time.length ) {
    sum += time[i]
    i++
  }
  //createing a string of HTML code using a template literal, and assigns it to the innerHTML property of the list element. 
  const minutes = sum % 60;
  const hours = (sum - minutes) / 60;
  list.innerHTML = /* html */ `
      <dt>Athlete: </dt>
      <dd> ${firstName +' '+ surname} </dd>
      <dt>Total Races: ${races}</dt>
      <dt>Event Date (Latest): ${day.toString().padStart(2, '0')+' '+ month +' '+ year}</dt>
      <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
    `;
  fragment.appendChild(list);   //appending  the list element to the DocumentFragment 
  return fragment;              //return the DocumentFragment.
}
// select two elements using their data-athlete attribute, and append the HTML created by the createHtml function to those elements
document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));



  