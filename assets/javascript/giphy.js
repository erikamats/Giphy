                // Create list of topics 
                var topics = ["Jellyfish", "Sushi", " Wha", "Happy Dance", "Makeup" ];
                

                // Display topic Items/Buttons

                function renderButtons() {
                    $("#buttons").empty();  //clearing to avoid duplicate buttons
                    //loop through topics list to display options into buttons
                    for (var i = 0; i < topics.length; i++) {
                        var a = $("<button>");
                        a.addClass("animalbutton");
                        a.attr("data-topic", topics[i]);
                        a.text(topics[i]);
                        $("#buttons").append(a);

                    }
                }

renderButtons();



    // pausing gifs on click
//  Look up how to attach an event handler to dynamically generated content (in classwork)c
function erikaFun() {
    var state = $(this).attr("data-state");
// console.log("data-state: " + state);
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    //   console.log("clicked!");
    };


                // {/* when buttons are clicked, related gifs appear */}
$( document ).ready(function() {
$(document).on("click", ".animalbutton", function () {
                $("#gifs").empty();
                var favorites = $(this).text();
                console.log(favorites);

                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    favorites
                    + "&api_key=BI4zTvXKf4F4yPz2myd5GFtZ6Vs5RCSj&limit=10";


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
                    
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div class='item'>");
                    var rating = results[i].rating;
                    //display the ratings
                    var p = $("<div class='pics'><p>").text("Rating: " + rating);

                  

                    //add image
                    // add src to image based on result item property
                    var favoriteImage = $("<img>")
                    favoriteImage.attr("src", results[i].images.fixed_height_still.url)
                    favoriteImage.attr("data-still", results[i].images.fixed_height_still.url)
                    // below should be a gif
                    favoriteImage.attr("data-animate", results[i].images.fixed_height.url)
                    favoriteImage.addClass("gify")
                     favoriteImage.attr("data-state","still")
    

                                  
                    
                        
                        //append/display image gifDiv
                        gifDiv.append(p);
                        gifDiv.append(favoriteImage);
                        $("#gifs").prepend(gifDiv);

                     } //closes if statement: ratings
           
                    }; //closes for loop/array

        }); //closes .then function

}); //closes on click event handler of button
//Taking input and generating a button 

$(document).on("click", "#add-gif", function (event) {
    event.preventDefault();
    var newInput = $("#gif-input").val();
    topics.push(newInput);
    renderButtons();
    // console.log(newInput);

 $("#gif-input").val(""); // clearing form upon submit

}); // close add new gif input

});




$(document).on("click",".gify", erikaFun);




