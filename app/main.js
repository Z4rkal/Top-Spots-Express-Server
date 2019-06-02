$(document).ready(function () {
    // write your code here
    $.getJSON('/data', function (data) {
        //console.log('Name: ' + data[1].name);
        data.forEach(function (element) {
            var row = $('#table-body');
            row.append('<tr class="table-row"><td class="loc-name">' + element.name + '</td>' +
                '<td class="loc-desc">' + element.description + '</td>' +
                '<td class="loc-link"><a class="link-text" href="https://www.google.com/maps?q=' + element.location[0] + ',' + element.location[1] + '"> Open in Google Maps</a></td></tr>');
        });
    });
});