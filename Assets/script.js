var targetDate = document.querySelector('#currentDay');
var todayDate = document.createElement('p');
todayDate.setAttribute('class', 'hourDate')
todayDate.textContent = moment().format('dddd MMMM Do YYYY');
targetDate.appendChild(todayDate);
//this is where the today's date shows in the html.

var hour = moment().format('HH')
