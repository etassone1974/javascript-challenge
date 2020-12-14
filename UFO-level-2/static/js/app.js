// Assign tableData from data.js
var tableData = data;

// Declare variables to hold filtered sets of data
// Using multiple variables to keep on filtering the filtered data
// i.e. As one filter is applied e.g. a date, another can be added in the form of e.g. a country
// applied as a filter to the first set of data
// Possible then to filter based on values in date, city, state, country and shape filters
// or all five or any combination of these filters
// Also allows for filters to be used and displayed in the table  
// and then add more filters to "drill down" more selectively into the data
// Would be useful for larger data sets
// Entering no search terms and just clicking the "Filter Table" button returns and displays all data
var filteredData1;
var filteredData2;
var filteredData3;
var filteredData4;
var filteredData5;

// Select the Filter Table button by ID
let filterButton = d3.select("#filter-btn");

// Select the Reset Filters button by ID
let resetButton = d3.select("#reset-btn");

// Create event handler and call filterTable function for filtering and displaying
// table of UFO sightings
filterButton.on("click", filterTable);

// Create event handler and call resetFilter function for resetting all filters
resetButton.on("click", resetFilter);

// Define resetFilter function which clears all inputs in the form with "form" as ID
// Also clears results displayed as filtered data
function resetFilter() {
  // Clear all inputs to filter
  document.getElementById("form").reset();
  // Select the body of the table that displays results
  let tbody = d3.select("tbody");
  // Clear output of the table
  tbody.html("");
}

// Complete the event handler function for the form and constructing the filtered data
function filterTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the date input element and get the raw HTML node
  let inputDateElement = d3.select("#datetime");

  // Get the value property of the date input element
  // Use trim() to remove any leading or trailing whitespace
  let inputDateValue = inputDateElement.property("value").trim();

  // Select the city input element and get the raw HTML node
  let inputCityElement = d3.select("#city");

  // Get the value property of the city input element
  // Use trim() to remove any leading or trailing whitespace
  // Use toLowerCase() to convert any input to lowercase as it is listed in the tableData variable
  let inputCityValue = inputCityElement.property("value").trim().toLowerCase();

  // Select the state input element and get the raw HTML node
  let inputStateElement = d3.select("#state");

  // Get the value property of the state input element
  // Use trim() to remove any leading or trailing whitespace
  // Use toLowerCase() to convert any input to lowercase as it is listed in the tableData variable
  let inputStateValue = inputStateElement.property("value").trim().toLowerCase();

  // Select the country input element and get the raw HTML node
  let inputCountryElement = d3.select("#country");

  // Get the value property of the country input element
  // Use trim() to remove any leading or trailing whitespace
  // Use toLowerCase() to convert any input to lowercase as it is listed in the tableData variable
  let inputCountryValue = inputCountryElement.property("value").trim().toLowerCase();

  // Select the shape input element and get the raw HTML node
  let inputShapeElement = d3.select("#shape");

  // Get the value property of the shape input element
  // Use trim() to remove any leading or trailing whitespace
  // Use toLowerCase() to convert any input to lowercase as it is listed in the tableData variable
  let inputShapeValue = inputShapeElement.property("value").trim().toLowerCase();

  // If the inputDateValue is empty i.e. no search terms given
  // Retrieve entire dataset for displaying in table
  if (inputDateValue == "") {
      // Output message to console
      console.log("Empty date search field");
      // Set filteredData1 to retrieve all data by assigning it to tableData
      filteredData1 = tableData;
  }
  else {
    // Write value to console for checking
     console.log(inputDateValue);
     // Use arrow function over tableData to filter data to sightings in which the date
     // matches the date value input into the filter
     // Store in filteredData1
     filteredData1 = tableData.filter(sighting => sighting.datetime === inputDateValue);
  }

  // If the inputCityValue is empty i.e. no search terms given
  // Retrieve entire dataset from filteredData1 and assign it to filteredData2
  if (inputCityValue == "") {
    // Output message to console
    console.log("Empty city search field");
    // Retrieve entire dataset from filteredData1 and assign it to filteredData2
    filteredData2 = filteredData1;
  }
  else {
  // Write value to console for checking
    console.log(inputCityValue);
     // Use arrow function over tableData to filter data to sightings in which the city
     // matches the city value input into the filter
     // Store in filteredData2
    filteredData2 = filteredData1.filter(sighting => sighting.city === inputCityValue);
  }

  // If the inputStateValue is empty i.e. no search terms given
  // Retrieve entire dataset from filteredData2 and assign it to filteredData3
  if (inputStateValue == "") {
    // Output message to console
    console.log("Empty state search field");
    // Retrieve entire dataset from filteredData2 and assign it to filteredData3
    filteredData3 = filteredData2;
  }
  else {
  // Write value to console for checking
    console.log(inputStateValue);
     // Use arrow function over tableData to filter data to sightings in which the state
     // matches the state value input into the filter
     // Store in filteredData3
    filteredData3 = filteredData2.filter(sighting => sighting.state === inputStateValue);
  }
 
  // If the inputCountryValue is empty i.e. no search terms given
  // Retrieve entire dataset from filteredData3 and assign it to filteredData4
  if (inputCountryValue == "") {
    // Output message to console
    console.log("Empty country search field");
    // Retrieve entire dataset from filteredData3 and assign it to filteredData4
    filteredData4 = filteredData3;
  }
  else {
  // Write value to console for checking
    console.log(inputCountryValue);
    // Use arrow function over tableData to filter data to sightings in which the country
    // matches the country value input into the filter
    // Store in filteredData4
    filteredData4 = filteredData3.filter(sighting => sighting.country === inputCountryValue);
  }
 
  // If the inputShapeValue is empty i.e. no search terms given
  // Retrieve entire dataset from filteredData4 and assign it to filteredData5
  if (inputShapeValue == "") {
    // Output message to console
    console.log("Empty shape search field");
    // Retrieve entire dataset from filteredData4 and assign it to filteredData5
    filteredData5 = filteredData4;
  }
  else {
  // Write value to console for checking
    console.log(inputShapeValue);
    // Use arrow function over tableData to filter data to sightings in which the shape
    // matches the shape value input into the filter
    // Store in filteredData5
    filteredData5 = filteredData4.filter(sighting => sighting.shape === inputShapeValue);
  }

  // Output final result of all filters i.e. filteredData5 to console
  console.log(filteredData5);

  // Select the body of the table to display the results
  let tbody = d3.select("tbody");

  // Clear any previous output of the table
  tbody.html("");

  // Iterate through each filtered UFO sighting data set, addring a row to the table for each sighting
  filteredData5.forEach((sighting) => {
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
