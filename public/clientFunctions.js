const xhttp = new XMLHttpRequest();
var rating;
var year;
var genre;
var movies;
var index = 0;
var checkbox = document.getElementById("changeSearch");

var inputYearAndGenre = `
    <input type="number" placeholder="Type a Year" id="yearInput" onkeypress="handle(event);">
    <input type="text" placeholder="Type a Genre" id="genreInput" onkeypress="handle(event);">
    <button type="button" id="bttSearch" onclick="getInputValue();">Search</button>
    `

var inputRating = `
    <input type="number" placeholder="Type a number of Movies" id="ratingInput" max="62000" onkeypress="handle(event);">
    <button type="button" id="bttSearch" onclick="getInputValue();">Search</button>
    `

document.getElementById("inputs").innerHTML = document.getElementById("inputs").innerHTML + inputRating;
document.getElementById('switch').innerHTML = 'Change to Search by Year and Genre';

function getInputValue(){
    // Selecting the input element and get its value
    if(document.getElementById("inputs").childNodes.length > 5){
        year = document.getElementById("yearInput").value;
        genre = document.getElementById("genreInput").value;
        searchByYearAndGenre(year,genre);
        
    }else{
        rating = document.getElementById("ratingInput").value;
        searchByRating(rating);
        
    }
}

function handle(e){
	if(e.keyCode === 13){
		//write your specific code from here
    	getInputValue();
    }
	return false;
}

function searchByYearAndGenre(year, genre){
    index = 0;
    document.getElementById("movies").innerHTML = "";
    xhttp.open("GET", "http://localhost:3000/year:"+year+"&genre:"+genre, false);
    document.getElementById("loadingImg").style.visibility = "visible";
    xhttp.send();
    movies = JSON.parse(xhttp.responseText);
    document.getElementById("loadingImg").style.visibility = "hidden";
    if(movies.length > 0){
        paginationMoviesNext();
    }else{alert("Sorry! No movies were found. : /  Try another search."); }
}

function searchByRating(rating){

    if(parseInt(rating) > 62000){
        alert("Don't have all that film!!!");
    }else{
        index = 0;
        document.getElementById("movies").innerHTML = "";
        xhttp.open("GET", "http://localhost:3000/rating:"+rating, false);
        document.getElementById("loadingImg").style.visibility = "visible";
        xhttp.send();
        movies = JSON.parse(xhttp.responseText);
        document.getElementById("loadingImg").style.visibility = "hidden";
        if(movies.length > 0){
            paginationMoviesNext();
        }else{alert("Sorry! No movies were found. : /  Try another search."); }
    }

}

function changeuri(checkbox) {
    index = 0;
    if(checkbox.checked == true){
        document.getElementById("movies").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";
        document.getElementById("inputs").innerHTML = document.getElementById("inputs").innerHTML + inputYearAndGenre;
        document.getElementById('switch').innerHTML = 'Change to Search by Rating';
    }else{
        document.getElementById("movies").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";
        document.getElementById("inputs").innerHTML = document.getElementById("inputs").innerHTML + inputRating;
        document.getElementById('switch').innerHTML = 'Change to Search by Year and Genre';
    }
}

function paginationMoviesNext(){
    document.getElementById("movies").innerHTML = "";
    var i;
    if(index < 0){
        index = 0;
    }
    for(i=index; (i<index+20 && i<movies.length); i++){
        movie = movies[i];
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-subtitle" margin-top="10px">${movie.year}</h6>

                        <div class="details"> <b>Rating:</b> ${movie.rating}</div>
                        <div class="details"> <b>Genres:</b> ${movie.genres}</div>

                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('movies').innerHTML = document.getElementById('movies').innerHTML + x;
    }
    index =  i+1;
}

function paginationMoviesBack(){
    document.getElementById("movies").innerHTML = "";
    var i;
    if(index > movies.length){
        index = movies.length - 1;
    }
    for(i=index; (i>index-20 && i>0); i--){
        movie = movies[i];
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-subtitle" margin-top="10px">${movie.year}</h6>

                        <div class="details"> <b>Rating:</b> ${movie.rating}</div>
                        <div class="details"> <b>Genres:</b> ${movie.genres}</div>

                        <hr>
                    </div>
                </div>
            </div>
        `

        document.getElementById('movies').innerHTML = document.getElementById('movies').innerHTML + x;
    }
    index = i-1;
}