
const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=2310062da2c85131564e07a9b2044f63`

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.list.length; i += 8) {
      console.log(data.list[i].dt_txt);
      console.log(data.list[i].main.humidity);
      console.log(data.list[i].main.temp);
      console.log(data.list[i].wind.speed);
    }
    console.log(data)
    // $('#today').append(data.list[0].dt_txt)
    // $('#today').append(data.list[0].main.humidity)
    // // $('#today').append(data.list[0].main.temp)
    // // $('#forecast').text((data.list[0].wind.speed))
    // $('#today ').text((data.list[0].wind.speed)) 

    const today = $('<h3>')
    today.text(data.list[0].dt_txt)
    $('#today').append(today)


    const Temp = $('<div>')
    Temp.text(`Temperature: ${data.list[0].main.temp} Celcius`)
    $('#today').append(Temp)


    const Wind = $('<div>')
    Wind.text(data.list[0].wind.speed)
    $('#today').append(Wind)


    const humidity = $('<div>')
    humidity.text(data.list[0].main.humidity)
    $('#today').append(humidity)

  })


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
  $('#history').append(history_button)


})




//////////////////////////////////////////// 







const fiveDayHeader = $('<h3>')
fiveDayHeader.text("5 day forecast")
$('#forecast').append(fiveDayHeader)

//CITY SECTION//

// use api to seach for city
//get response then format response
//will need to use day JS to seet the data value as well
//retive the temp, wind and humidity from the data object


//5 DAY FORECAST SECTION 


