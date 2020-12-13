// Assign tableData from data.js
var tableData = data;

// Declare variable to hold filtered set of data
var filteredData;
var filteredData2;
var filteredData3;
var filteredData4;
var filteredData5;

// YOUR CODE HERE!

// Select the button
let button = d3.select("#filter-btn");

// Select the form
// let form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputDateElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputDateValue = inputDateElement.property("value").trim();

  // Select the input element and get the raw HTML node
  let inputCityElement = d3.select("#city");

  // Get the value property of the input element
  let inputCityValue = inputCityElement.property("value").trim().toLowerCase();

  // Select the input element and get the raw HTML node
  let inputStateElement = d3.select("#state");

  // Get the value property of the input element
  let inputStateValue = inputStateElement.property("value").trim().toLowerCase();

  // Select the input element and get the raw HTML node
  let inputCountryElement = d3.select("#country");

  // Get the value property of the input element
  let inputCountryValue = inputCountryElement.property("value").trim().toLowerCase();

  // Select the input element and get the raw HTML node
  let inputShapeElement = d3.select("#shape");

  // Get the value property of the input element
  let inputShapeValue = inputShapeElement.property("value").trim().toLowerCase();

  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputDateValue == "") {
      console.log("Empty date search field");
      // Set filteredData to retrieve all data by assigning it to tableData
      filteredData = tableData;
  }
  else {
    // Write value to console for checking
     console.log(inputDateValue);
     filteredData = tableData.filter(sighting => sighting.datetime === inputDateValue);
  }

  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputCityValue == "") {
    // Set filteredData to retrieve all data by assigning it to tableData
    // filteredData = tableData;
    console.log("Empty city search field");
    filteredData2 = filteredData;
  }
  else {
  // Write value to console for checking
    console.log(inputCityValue);
    filteredData2 = filteredData.filter(sighting => sighting.city === inputCityValue);
  }


  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputStateValue == "") {
    // Set filteredData to retrieve all data by assigning it to tableData
    // filteredData = tableData;
    console.log("Empty state search field");
    filteredData3 = filteredData2;
  }
  else {
  // Write value to console for checking
    console.log(inputStateValue);
    filteredData3 = filteredData2.filter(sighting => sighting.state === inputStateValue);
  }
 

  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputCountryValue == "") {
    // Set filteredData to retrieve all data by assigning it to tableData
    // filteredData = tableData;
    console.log("Empty country search field");
    filteredData4 = filteredData3;
  }
  else {
  // Write value to console for checking
    console.log(inputCountryValue);
    filteredData4 = filteredData3.filter(sighting => sighting.country === inputCountryValue);
  }
 

  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputShapeValue == "") {
    // Set filteredData to retrieve all data by assigning it to tableData
    // filteredData = tableData;
    console.log("Empty shape search field");
    filteredData5 = filteredData4;
  }
  else {
  // Write value to console for checking
    console.log(inputShapeValue);
    filteredData5 = filteredData4.filter(sighting => sighting.shape === inputShapeValue);
  }
  console.log(filteredData5);

  // Select the body of the table to display the results
  let tbody = d3.select("tbody");

  // Clear any previous output of the table
  tbody.html("");

  // Iterate through each filtered UFO sighting, addring a row to the table for each sighting
  filteredData5.forEach((sighting) => {
    // Append the row tag for each new row in the table
    let row = tbody.append("tr");
    // Iterate through each key-value pair and add the data as cells in the table
    // Consists of Date, City, State, Country, Shape, Duration, Comments
    Object.entries(sighting).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
    });
  });
  
}
