// apikey="8b02a7a2"
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const movieDetails = document.getElementById('movie-details');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = input.value;
    getMovieDetails(searchTerm);
});

async function getMovieDetails() {
    const url = `http://www.omdbapi.com/?apikey=23841633&t=${encodeURIComponent(input.value)}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMovieDetails(data);
}

function displayMovieDetails(movie) {
    if (movie.Response === 'True') {
        console.log(movie);
        const html = `
        <div class="grid-container">
          <div class="grid-item">
            <h2>${movie.Title}</h2><br>
            <img src="${movie.Poster}" alt="Movie Poster"><br><br><br>
            <p>IMDB: ${movie.imdbRating}</p>
            <p>Release Date: ${movie.Released}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>Director: ${movie.Director}</p>
            <p>Plot: ${movie.Plot}</p>
            <p>Cast: ${movie.Actors}</p>
            <p>Runtime: ${movie.Runtime}</p>
            
          </div>
        </div>
            
        `;
        movieDetails.innerHTML = html;
    } else {
        movieDetails.innerHTML = '<p>No movie found</p>';
    }
}
