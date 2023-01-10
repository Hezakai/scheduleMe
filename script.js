// Wraps all the code to prevent anything from firing before page load
$(function () {
  
  //listener that takes the text and btn id and saves them to local storage
  $(".saveBtn").click(function () {
    var rowID = this.parentNode.id
    var textID = (rowID + "txt");
    var txt = $('#' + textID).val();
    localStorage.setItem(rowID, JSON.stringify(txt));
    alert("Successfully saved: " + txt);
  });

  //loops through the each block and changes the background color based on comparison to current time
  for (let i = 9; i < 18; i++) {
    hourID = $('#' + i)
    // var currHour = (dayjs().format('H'))
    var currHour = (12)
    if (i < currHour) {
      $(hourID).attr("class", "row time-block past");
    }
    else if (i == currHour) {
      $(hourID).attr("class", "row time-block present");
    }
    else if (i > currHour) {
      $(hourID).attr("class", "row time-block future");
    }
  }

  //finds stored events and prints them to the corresponding textarea
  for (let i = 9; i < 18; i++) {
    txtArea = $('#' + i + "txt")
    storedTxt = localStorage.getItem(i);
    if (storedTxt !== null) {
      $(txtArea).val(storedTxt);
    }
  }
  
  //displays current date and time in header
  $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

});