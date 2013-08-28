$.ajax({
url: "http://api.themoviedb.org/3/movie/550?api_key=831449fc0abe9671cef1cdfab82fd646",
context: document.body
}).done(function() {
$(this).addClass("done");
});
