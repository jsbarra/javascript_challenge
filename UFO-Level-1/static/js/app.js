// from data.js

var tableData = data;
console.log(tableData)

// YOUR CODE HERE!

var tbody = d3.select("tbody")

for(var i=0; i < tableData.length; i++) {
    var rows = tbody.append("tr")
    rows.append('td').text(tableData[i]['datetime'])
    rows.append('td').text(tableData[i]['city'])
    rows.append('td').text(tableData[i]['state'])
    rows.append('td').text(tableData[i]['country'])
    rows.append('td').text(tableData[i]['shape'])
    rows.append('td').text(tableData[i]['durationMinutes'])
    rows.append('td').text(tableData[i]['comments'])
}

tableData.forEach(function(i){
    rows = tbody.append('tr')
    rows.append('td').text(['datetime'])
    rows.append('td').text(tableData[i]['city'])
    rows.append('td').text(tableData[i]['state'])
    rows.append('td').text(tableData[i]['country'])
    rows.append('td').text(tableData[i]['shape'])
    rows.append('td').text(tableData[i]['durationMinutes'])
    rows.append('td').text(tableData[i]['comments'])
});

d3.select("#filter-btn").on("click", filter_data);
function filter_data() {
    var user_data = d3.select("#datetime").property("value")
    var city_data = d3.select("#city").property("value")
    var state_data = d3.select("#state").property("value")
    var country_data = d3.select("#country").property("value")
    var shape_data = d3.select("#shape").property("value")
    var date_filter = tableData

    if(user_data != "") {
        date_filter = date_filter.filter(d => d.datetime == city_data)
     }
    
    if (city_data != "") {
        date_filter = date_filter.filter(d => d.city == city_data)
    }

    if(state_data != "") {
        date_filter = date_filter.filter(d => d.state == state_user)
    }

    if(country_data != "") {
        date_filter = date_filter.filter(d => d.country == country_data)
    }

    if(shape_data != "") {
        date_filter = date_filter.filter(d => d.shape == shape_data)
    }

}
