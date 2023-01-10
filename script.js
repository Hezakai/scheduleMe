

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click(function () {
    var rowID = this.parentNode.id
    console.log("rowID: " + rowID);
    var textID = (rowID + "txt");
    console.log("textID: " + textID)
    console.log($("#"+textID).val)
    var txt = $('#'+textID).val();
    console.log("txt = " + txt)
    alert("Handler for " + rowID + " .click() called.");
    localStorage.setItem(rowID, JSON.stringify(txt));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (let i = 9; i < 18; i++) {
    hourID = $('#' + i)
    console.log(hourID)
    var currHour = (dayjs().format('H'))
    console.log("Timeslot: " + i)
    console.log("Current: " + currHour)
    if (i < currHour) {
      console.log("past")
      $(hourID).attr("class", "row time-block past");
    }
    else if (i == currHour) {
      console.log("present")
      $(hourID).attr("class", "row time-block present");
    }
    else if (i > currHour) {
      console.log("future")
      $(hourID).attr("class", "row time-block future");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

});