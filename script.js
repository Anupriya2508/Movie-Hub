let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

//Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


//////////// Login page:

function logintheuser() {
  document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    // console.log(enteredPassword)
    // console.log(enteredUsername)

  
    // Fetching data
    const response = await fetch('https://653dc3a0f52310ee6a9a4bee.mockapi.io/moviehub');

    if (response.ok) {
      // console.log("enteredUsername);
      const userData = await response.json();
      console.log(userData);
      // Find a user with matching username and password
      const user = userData.find(user => user.username === enteredUsername && user.password === enteredPassword);

      if (user) {
        
        // window.location.href = 'index.html';

        localStorage.setItem('username' , enteredUsername)
        location.replace("index.html");

        // const element = document.getElementsByClassName("after_login");
        // element.remove();

        // document.getElementById('landing').innerHTML = ``;
      
        // document.getElementsByClassName('topnav').innerHTML = `<a href="new_movie.html" class="newbt">NEW MOVIES</a>
        //     <a href="popular.html">Popular</a>
        //     <p id="username">Welcome ${enteredUsername}</p>`;

        

        
      } else {
        //Login failed
        alert('Login failed. Please check your username and password.');
      }
    } else {
      //Error in fetching user data
      alert('An error occurred while fetching user data. Please try again later.');
    }
  });
}

    
////////Searching
// function searchMovies() {
//   const searchInput = document.getElementById("movieSearch").value.toLowerCase();

//   //Matching title
//   const filteredMovies = movies.filter((movie) =>
//   movie.title.toLowerCase().includes(searchInput)
// );


//   //Clearing movie-cards
//   movieCardsContainer.innerHTML = "";

//   //Filtered movies
//   for (let i = 0; i < filteredMovies.length; i++) {
//     if (i % columnsPerRow === 0) {
//       var newRow = document.createElement("div");
//       newRow.className = "row";
//       movieCardsContainer.appendChild(newRow);
//     }

//     const movie = filteredMovies[i];

//     const movieCard = document.createElement("div");
//     movieCard.className = "col-md-3";
//     movieCard.innerHTML = `
//       <div class="movie-card">
//         <img src="${movie.imageSrc}" alt="${movie.title}">
//         <div class="temp">
//           <h2>${movie.title}</h2>
//           <p class="genere">Released: ${movie.releaseYear}</p>
//           <p class="genere">${movie.genre}</p>
//         </div>
//         <div class="movie-details">
//           <h4>Overview</h4>
//           <p>${movie.overview}</p>
//         </div>
//       </div>
//     `;

//     newRow.appendChild(movieCard);
//   }
// } // by movie-name


// by movie-name and genre
function searchMovies() {
  const searchInput = document.getElementById("movieSearch").value.toLowerCase();

  // Use filter to find movies where title matches or any genre element matches
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchInput) || 
    movie.genre.some((g) => g.toLowerCase().includes(searchInput))
  );

  // Clear the movie-cards
  movieCardsContainer.innerHTML = "";

  // Display filtered movies
  for (let i = 0; i < filteredMovies.length; i++) {
    if (i % columnsPerRow === 0) {
      var newRow = document.createElement("div");
      newRow.className = "row";
      movieCardsContainer.appendChild(newRow);
    }

    const movie = filteredMovies[i];

    const movieCard = document.createElement("div");
    movieCard.className = "col-md-3";
    movieCard.innerHTML = `
      <div class="movie-card">
        <img src="${movie.imageSrc}" alt="${movie.title}">
        <div class="temp">
          <h2>${movie.title}</h2>
          <p class="genere">Released: ${movie.releaseYear}</p>
          <p class="genere">${movie.genre.join(', ')}</p>
        </div>
        <div class="movie-details">
          <h4>Overview</h4>
          <p>${movie.overview}</p>
        </div>
      </div>
    `;

    newRow.appendChild(movieCard);
  }
}
