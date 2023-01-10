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
    var currHour = (dayjs().format('H'))
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
  // $('#currentDay').text(dayjs().format('dddd, MMMM DD YYYY'));

 
  var a = dayjs().format('dddd, MMMM DD YYYY');
  let b = a.split("")
  var c = 0
  
   //loop through array checking isIntegar if so add 2 to index [c]
  function findInt() {
    for (let i = 0; i < b.length; i++) {
      let f = b[i]
      console.log(f)
      if (f == " " ) {
        console.log("Space")
      } else if (f >= 0 && f <= 9 ) {
        console.log("Number")
        console.log(i)
        c=i + 2
        console.log(c)
        break
      } else {
        console.log("NaN")
      }
    }
  }

  // reads the value of h(b[c]) and compares.  splices correct ordination into the correct spot and pushes to HTML
  function addOrd(params) {
    if (h == 0) {
      b.splice(c, 0, "th")
      console.log(b)
      let d = b.join("")
      console.log(d)
      $('#currentDay').text(d)
    } 
    if (h == 1) {
      b.splice(c, 0, "st")
      console.log(b)
      let d = b.join("")
      console.log(d)
      $('#currentDay').text(d)
    } 
    if (h == 2) {
      b.splice(c, 0, "nd")
      console.log(b)
      let d = b.join("")
      console.log(d)
      $('#currentDay').text(d)
    } 
    if (h == 3) {
      b.splice(c, 0, "rd")
      console.log(b)
      let d = b.join("")
      console.log(d)
      $('#currentDay').text(d)
    } 
    if (c >= 4 && c <= 9) {
      h.splice(c, 0, "th")
      console.log(b)
      let d = b.join("")
      console.log(d)
      $('#currentDay').text(d)
    } 
  }
  
  findInt()
  let h = b[c]
  console.log(c)
  console.log(h)
  addOrd()

});