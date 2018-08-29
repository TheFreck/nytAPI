

    $("#search").on("click", function(event){
        event.preventDefault()
        doIt();
        
    });
    
function generateURL(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    url += '?' + $.param({
        'api-key': "99cdef63b2344ec4baa51164996381df",
        'q': searchTerm,
        'begin_date': startYear,
        'end_date': endYear,
        

    })

    
    var searchTerm = $("#search-term");
    var records = $("#records");
    var startYear = $("#start-year");
    var endYear = $("#end-year");
    var apiKey = "99cdef63b2344ec4baa51164996381df"
    


}


    
function doIt(){
    
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        for(i=0; i<records; i++){
            
            var article = $("<div>");
            // generate a div for the article
            // generate a p inside the div
            // 


        }


        });
        
        
    }