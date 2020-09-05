$(document).ready(function() {

    //initial vars to hold our user inputs:
    let searchTerm = "";
    let numberOfResults = 0;

    //NYT APIkey:
    const APIkey = '3BIqflRfl3yifYGKnHsGmykzEwPzZAgf';

    //on-click event for 'search' button:
    $('#search-button').on('click', function() {
        console.log('searching');
        console.log(APIkey.length);

        //assign user inputs to vars:
        searchTerm = $('#search-term').val();
        numberOfResults = $('#num-of-results').val();

        //build the query URL using the two input vars && our API key:
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${APIkey}`;

        //make the AJAX call to the NYT's API:
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
        });

        //finally print the results to the DOM:
        //resultsPrinter(results);
    });

    //function for updating the DOM with the formatted search results:
    const resultsPrinter = (news) => {
        //$('#results-card').html(news);
        console.log();
    }

//end of docready function.
});