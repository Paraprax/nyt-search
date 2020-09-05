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
            resultsAnalyzer(response);
        });
    });

    const resultsAnalyzer = (news) => {
        //empty the results div to fill with new results each time:
        $('#articles-found').empty();

        //vars to hold the desired info from the JSON array:
        console.log('results being formatted..');
        let headline = "";
        let byline = "";
        let pubDate = "";
        let body = "";
        let webURL = "";

        console.log(news.response.docs);

        //loops through the whole JSON response and extracts specific info to vars:
        for (var i = 0; i < news.response.docs.length; i++) {
            headline = news.response.docs[i].headline.main;
            byline = news.response.docs[i].byline.original;
            pubDate = news.response.docs[i].pub_date;
            body = news.response.docs[i].snippet;
            webURL = news.response.docs[i].web_url;
            //calls the resultsPrinter function && passes it the extracted info for printing to the DOM:
            resultsPrinter(headline, byline, pubDate, body, webURL);
        }
    };

    //function for updating the DOM with the formatted search results:
    const resultsPrinter = (head, author, date, text, link) => {
        var headline = $(`<h2><strong>${head}</strong></h2>`);
        var byline = $(`<h4><strong>${author}</strong></h4>`);
        var pubDate = $(`<h5>${date}</h5>`);
        var article = $(`<h4 class="article-body">${text}</h4>`);
        var readmore = $(`<h6>Read more: <a href="${link}">${link}</a></h6>`);
        
        //append each block to the div:
        $('#articles-found').append(headline, byline, pubDate, article, readmore);
    }

//end of docready function.
});