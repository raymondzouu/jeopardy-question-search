
var clueVal = window.location.hash.substring(1, window.location.hash.indexOf('&'));
var startDate = window.location.hash.substring(window.location.hash.indexOf('&')+1, window.location.hash.indexOf('%'));
var endDate = window.location.hash.substring(window.location.hash.indexOf('%')+1);
var url = '';
console.log(clueVal);
console.log(startDate);
console.log(endDate);

if (clueVal == "none" && startDate != "none" && endDate != "none") {
    url = 'https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?min_date=' + startDate + '&max_date=' + endDate;
} else if (clueVal != "none" && startDate == "none" && endDate == "none") {
    url = 'https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?value=' + clueVal;
} else {
    url = 'https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?value=' + clueVal + '&min_date=' + startDate + '&max_date=' + endDate;
}
//document.getElementById("myHeader").innerHTML = clicked_id;

fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
            console.log('There was a problem. Status code: ' + response.status);
                    
        }

        response.json().then(function(data) {
            console.log(data);
            console.log(data.length);
            var output = document.getElementById('clueTable');
            var i;
            var table = '<tr class="header"><th style="width:40%;">Question</th><th style="width:20%;">Answer</th><th style="width:20%;">Value</th><th style="width:20%;">Airdate</th></tr>';
                    
            //console.log(categories);

            for(i = 0; i < data.length; i++) {
                table += '<tr>';
                table += '<td align="center" height="100">' + data[i].question + '</td>';
                table += '<td align="center" height="100">' + data[i].answer + '</td>';
                table += '<td align="center" height="100">' + data[i].value + '</td>';
                table += '<td align="center" height="100">' + data[i].airdate.substring(0, 10) + '</td>';
                //table += '<td> <button type="button" id =' + data[i].id + ' onClick="reply_click(this.id)">View</button> </td>';
                //table += '<td> <a href="clues.html" class="button" id =' + data[i].id + '>View</a> </td>';
                table += '<tr>';
            }
            output.innerHTML = '<table class="font">' + table + '</table>';
        })
        
    })

    .catch(function(error) {
        console.log('Fetch Error :-S', error);
    })
// function getClues(clicked_id) {

//     fetch('http://jservice.io/api/clues?category=' + clicked_id)
//         .then(function(response) {
//             if (response.status !== 200) {
//                 console.log('There was a problem. Status code: ' + response.status);
                        
//             }

//             response.json().then(function(data) {
//                 console.log(data);
//                 console.log(data.length);
//                 var output = document.getElementById('clueTable');
//                 var i;
//                 var table = '<tr class="header"><th style="width:40%;">Question</th><th style="width:20%;">Answer</th><th style="width:20%;">Value</th><th style="width:20%;">Airdate</th></tr>';
                        
//                 //console.log(categories);

//                 for(i = 0; i < data.length; i++) {
//                     table += '<tr>';
//                     table += '<td>' + data[i].question + '</td>';
//                     table += '<td>' + data[i].answer + '</td>';
//                     table += '<td>' + data[i].value + '</td>';
//                     table += '<td>' + data[i].airdate + '</td>';
//                     //table += '<td> <button type="button" id =' + data[i].id + ' onClick="reply_click(this.id)">View</button> </td>';
//                     //table += '<td> <a href="clues.html" class="button" id =' + data[i].id + '>View</a> </td>';
//                     table += '<tr>';
//                 }
//                 output.innerHTML = '<table>' + table + '</table>';
//             })
            
//         })
        
//         .catch(function(error) {
//             console.log('Fetch Error :-S', error);
//         })

// }