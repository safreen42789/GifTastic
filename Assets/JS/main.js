
//giphy API key: 6xez07R1PVnjgGI8L7RHFSg3RnC7q4ZU
$(document).ready(function() {
    //create an array of animals to be shown as buttons on page load
    var topics = ["cat","dog","panda","horse","dolphin","owl","fish","zebra","bear", "chicken","cow","fox","sheep","kangaroo","giraffe","cow","sloth","lamb","bird","bat","tiger","deer","donkey","duck","eagle","elephant","frog","lion","rabbit","monkey","skunk"]; 
    //for loop that will loop through the topics array and create a button with corresponding value for each index
      for (var i = 0; i < topics.length; i++) {
         $("#animalsHere").append("<button value='" + topics[i] + "'>" + topics[i] + "</button>");
        }; 
    //button on click function to initiate AJAX for giphy acquisition
      $("button").on('click', function(){
      //creating a variable that will hold the value of each of the items in topics array, value is set for each index
      var animal = $(this).val();
    // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6xez07R1PVnjgGI8L7RHFSg3RnC7q4ZU&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
      //initiate AJAX call
      $.ajax({
      url: queryURL,
      method: "GET"
      })
      //store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        //creating a variable to store the retrieved data
      var results = response.data;
      //logging the query
      console.log(response);
        //looping through results variable
          for (var i = 0; i < results.length; i++) {
            //creating and storing a divtag coresponding to the class in HTML
            var gifDiv = $("<div class='animalsHere'>");
            //creating a variable to store the ratings of the giphys
            var rating = results[i].rating;
            //creating a p tag with the giphy ratings
            var p = $("<p>").text("Rating: " + rating);
            //creating an image tag
            var animalImage = $("<img>");
            //setting the src attribute of the image to a property pulled of the giphy item
            animalImage.attr("src", results[i].images.fixed_height.url);
            //prepending the p and image tag to the gifDiv variable
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);
            //prepending the gifDiv variable to the id in HTML
            $("#animalsHere").prepend(gifDiv);
          };

        });
      
      });
      //on submit button click does the following...   
        $("#select-animal").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the artist name
        var inputAnimal = $("#animal-input").val().trim();
        //appending the user input to animalsHere div in the form of a button
        $("#animalsHere").append("<button value='" + inputAnimal + "'>" + inputAnimal + "</button>");

        $("button").on('click', function(){
        //creating a variable that will hold the value of each of the items in topics array, value is set for each index
        var animal = $(this).val();
        // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=6xez07R1PVnjgGI8L7RHFSg3RnC7q4ZU&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
        //initiate AJAX call
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        //store all of the retrieved data inside of an object called "response"
        .then(function(response) {
        //creating a variable to store the retrieved data
        var results = response.data;
        //logging the query
        console.log(response);
        //looping through results variable
          for (var i = 0; i < results.length; i++) {
            //creating and storing a divtag coresponding to the class in HTML
            var gifDiv = $("<div class='animalsHere'>");
            //creating a variable to store the ratings of the giphys
            var rating = results[i].rating;
            //creating a p tag with the giphy ratings
            var p = $("<p>").text("Rating: " + rating);
            //creating an image tag
            var animalImage = $("<img>");
            //setting the src attribute of the image to a property pulled of the giphy item
            animalImage.attr("src", results[i].images.fixed_height.url);
            //prepending the p and image tag to the gifDiv variable
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);
            //prepending the gifDiv variable to the id in HTML
            $("#animalsHere").prepend(gifDiv);
          };

        });
      
      });
          
    });
      
  });
