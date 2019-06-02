$(document).ready(function () {
    //Gets the data.json file from the server
    $.getJSON('/data', function (data) {
        //Then builds the table from the data
        data.forEach(function (element) {
            var row = $('#table-body');
            row.append('<tr class="table-row"><td class="loc-name">' + element.name + '</td>' +
                '<td class="loc-desc">' + element.description + '</td>' +
                '<td class="loc-link"><a class="link-text" href="https://www.google.com/maps?q=' + element.location[0] + ',' + element.location[1] + '"> Open in Google Maps</a></td></tr>');
        });
    });
});