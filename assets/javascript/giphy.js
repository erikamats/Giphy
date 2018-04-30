                // Create list of topics 
                var topics = ["Jellyfish", "Sushi", " Wha", "Happy Dance", ];

                // Display topic Items/Buttons

                function renderButtons() {
                    $("#buttons").empty();  //clearing to avoid duplicate buttons
                    //loop through topics list to display options into buttons
                    for (var i = 0; i < topics.length; i++) {
                        var a = $("<button>");
                        // a.addClass("favorites");
                        a.attr("data-topic", topics[i]);
                        a.text(topics[i]);
                        $("#buttons").append(a);

                    }
                }


// {/* when buttons are clicked, related giphs appear */}

$("#buttons").on("click", function () {
                var favorites = $(this).attr(topics[i]);

                //   var apiKey ="&api_key=BI4zTvXKf4F4yPz2myd5GFtZ6Vs5RCSj"

                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    favorites
                    + "&api_key=BI4zTvXKf4F4yPz2myd5GFtZ6Vs5RCSj&limit=10";


                    // https://api.giphy.com/v1/gifs/search?q=sushi&api_key=BI4zTvXKf4F4yPz2myd5GFtZ6Vs5RCSj&limit=10 //test request

                    //AJax Request
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    })

                    // what is done with with information after it's been received
                    .then(function (response) {
                    //   console.log(response);

                    var results = response.data; // storing the results

                    //loop results
                    for (var i = 0; i < results.length; i++) {

                // if results are pg,  create a new div for gifs
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div class='item'>");
                    var rating = results[i].rating;
                    //display the ratings
                    var p = $("<p>").text("Rating: " + rating);

                    //add image
                    var favoriteImage = $("<img>");

                    // add src to image based on result item property
                    favoriteImage.attr("src", results[i].images.fixed_height.url);

                    //append/display image gifDiv
                    gifDiv.append(p);
                    gifDiv.append(favoriteImage);
                    $("#gifs").prepend(gifDiv);

                } //closes if statement

            } //closes for loop

        }); //closes then function

}); //closes on click event handler

renderButtons();

