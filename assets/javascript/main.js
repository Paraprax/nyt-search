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
        var pubDate = "";
        var body = "";
        var webURL = "";

        console.log(news.response.docs);

        for (var i = 0; i < news.response.docs.length; i++) {
            headline = news.response.docs[i].headline.main;
            byline = news.response.docs[i].byline.original;
            pubDate = news.response.docs[i].pub_date;
            body = news.response.docs[i].snippet;
            webURL = news.response.docs[i].web_url;
            resultsPrinter(headline, byline, pubDate, body, webURL);
        }
    };

    //function for updating the DOM with the formatted search results:
    const resultsPrinter = (head, author, date, text, link) => {
        var headline = $(`<h2><strong>${head}</strong></h2>`);
        var byline = $(`<h4><strong>${author}</strong></h4>`);
        var pubDate = $(`<h5>${date}</h5>`);
        var article = $(`<h3>${text}</h3>`);
        var readmore = $(`<h6>Read more: <a href="${link}">${link}</a></h6>`);
        
        $('#articles-found').append(headline, byline, pubDate, article, readmore);
        console.log();
    }

//end of docready function.
});