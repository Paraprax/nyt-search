$(document).ready(function() {

    //initial vars to hold our user inputs:
    let searchTerm = "";
    let numberOfResults = 0;

    //on-click event for 'search' button:
    $('#search-button').on('click', function() {
        console.log('searching');

        //assign user inputs to vars:
        searchTerm = $('#search-term').val();
        numberOfResults = $('#num-of-results').val();


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