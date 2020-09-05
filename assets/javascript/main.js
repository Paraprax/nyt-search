$(document).ready(function() {

    //initial vars to hold our user inputs:
    let searchTerm = "";
    let numberOfResults = 0;

    //NYT APIkey:
    const APIkey = '3BIqflRfl3yifYGKnHsGmykzEwPzZAgf';

    //on-click event for 'search' button:
    $('#search-button').on('click', function() {
        console.log('searching');

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
            //finally send the JSON results to be formatted by the designated function:
            resultsFormatter(response);
        });
    });

    const resultsFormatter = (news) => {
        console.log('results being formatted..');
        var headline = "";
        var byline = "";
        var body = "";

        console.log(news.response.docs);

        for (var i = 0; i < news.response.docs.length; i++) {
            headline = news.response.docs[i].headline.main;
            console.log(headline);
        }
    };

    //function for updating the DOM with the formatted search results:
    const resultsPrinter = (news) => {
        //$('#results-card').html(news);
        console.log();
    }

//end of docready function.
});