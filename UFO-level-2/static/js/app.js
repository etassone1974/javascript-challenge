// Assign tableData from data.js
var tableData = data;

// Declare variable to hold filtered set of data
var filteredData;

// YOUR CODE HERE!

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value").trim();

  // If the inputValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputValue == "") {
      console.log("Empty search field - retrieving all data")
      // Set filteredData to retrieve all data by assigning it to tableData
      filteredData = tableData;
  }
  else {
    // Write value to console for checking
     console.log(inputValue);
     filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  }
  console.log(filteredData);

  // Select the body of the table to display the results
  let tbody = d3.select("tbody");

  // Clear any previous output of the table
  tbody.html("");

  // Iterate through each filtered UFO sighting, addring a row to the table for each sighting
  filteredData.forEach((sighting) => {
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
