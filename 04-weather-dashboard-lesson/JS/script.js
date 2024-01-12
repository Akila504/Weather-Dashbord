




//HISTORY SECTION//
//set the searh input to local storage
//create a button for each item
//retive back and append to the sidebar as a button
//if clicked on the button the API should search for that city


const history_button = $('<button>')


$('#search-button').on("click", function (e) {
  e.preventDefault()
  let search = $('#search-input').val()
  // //need to save each searched item to local storage 
  const storedJSON = JSON.parse(localStorage.getItem('history_value'))

  if (storedJSON !== null) {
    localStorage.setItem('history_value', JSON.stringify(search))
  }
  else {
    localStorage.setItem('history_value', JSON.stringify(search))
  }

  //SHOULD create a list 
  //with the list add button 
  history_button.text(storedJSON)
  $('#history').prepend(history_button)


})







//CITY SECTION//

// use api to seach for city
//get response then format response
//will need to use day JS to seet the data value as well
//retive the temp, wind and humidity from the data object


//5 DAY FORECAST SECTION 


