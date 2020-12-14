// Assign tableData from data.js
var tableData = data;

// Declare variable to hold filtered set of data
var filteredData;

// Select the Filter Table button by ID
let filterButton = d3.select("#filter-btn");

// Select the form by ID
let form = d3.select("#form");

// Create event handlers and call filterTable function for filtering and displaying
// table of UFO sightings
// Both pressing the "Filter Table" button and clicking "Enter" after inputting a date
// call the filterTable function and display the table of results
// Clearing the input field and pressing "Enter" or the "Filter Table" button
// effectively clears the filter and displays all the data again
filterButton.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the Date input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the Date input element
  // Use trim() to remove any leading or trailing whitespace
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
     // Use arrow function over tableData to filter data to sightings in which the date
     // matches the date value input into the filter
     // Store in filteredData
     filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  }
  
  // Output the result of the date filter i.e. filteredData to console
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
    // Consists of Date, City, State, Country, Shape, Duration, Comments values
    // Keys are: datetime, city, state, country, shape
    Object.entries(sighting).forEach(([key, value]) => {
    // Each cell entry must begin with the td tag
    let cell = row.append("td");
    // The text value written in the cell is derived from the value element of the key-value pair
    cell.text(value);
    });
  });
  
}
