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

