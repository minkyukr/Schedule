var targetDate = document.querySelector('#currentDay');
var todayDate = document.createElement('p');
todayDate.setAttribute('class', 'hourDate')
todayDate.textContent = moment().format('dddd MMMM Do YYYY');
targetDate.appendChild(todayDate);
//this is where the today's date shows in the html.


function loadPage() {
    var saveButton = document.querySelector('.saveBtn');
    saveButton.addEventListener('click', function () {
    var userInput = document.querySelector('.description').value;
    var time = $(this).parent().attr("id");
    //이거는 모르겟다..

    localStorage.setItem(time, userInput);
  });

  function hourUpdate() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  } 
  hourUpdate();

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

// $(document).ready(function() {
//     // listen for save button clicks
//     $(".saveBtn").on("click", function() {
//       // get nearby values
//       var value = $(this).siblings(".description").val();
//       var time = $(this).parent().attr("id");
  
//       // save in localStorage
//       localStorage.setItem(time, value);
//     });
  
//     function hourUpdater() {
      // get current number of hours
      // var currentHour = moment().hours();
  
      // // loop over time blocks
      // $(".time-block").each(function() {
      //   var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      //   // check if we've moved past this time
      //   if (blockHour < currentHour) {
      //     $(this).addClass("past");
      //   } 
      //   else if (blockHour === currentHour) {
      //     $(this).removeClass("past");
      //     $(this).addClass("present");
      //   } 
      //   else {
      //     $(this).removeClass("past");
      //     $(this).removeClass("present");
      //     $(this).addClass("future");
      //   }
      // });
//     }
  
//     hourUpdater();
  
//     // set up interval to check if current time needs to be updated
//     var interval = setInterval(hourUpdater, 15000);
  
//     // load any saved data from localStorage
//     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
//     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
//     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
//     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
//     $("#hour-13 .description").val(localStorage.getItem("hour-13"));
//     $("#hour-14 .description").val(localStorage.getItem("hour-14"));
//     $("#hour-15 .description").val(localStorage.getItem("hour-15"));
//     $("#hour-16 .description").val(localStorage.getItem("hour-16"));
//     $("#hour-17 .description").val(localStorage.getItem("hour-17"));
// }
