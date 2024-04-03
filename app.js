const API1 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const API2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const API3 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3";

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// const movieBox = document.getElementById('movieBox')
const movieBox1 = document.getElementById('movieBox1')
const movieBox2 = document.getElementById('movieBox2')
const movieBox3 = document.getElementById('movieBox3')

const getMovies1 = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data);
    showMovies1(data.results)
}
const getMovies2 = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data);
    showMovies2(data.results)
}
const getMovies3 = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data);
    showMovies3(data.results)
}


const showMovies1 =  (data) => {
    // console.log(data);   
    movieBox1.innerHTML = ''

    data.forEach((movie)=>{
        console.log(movie);
        let div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML= `
        <img src="${ImgPath+movie.poster_path}" alt="${movie.title}">
        <div class="overlay">
        <div class="title">
        <h2>${movie.title}</h2>
        <span>IMDB: ${movie.vote_average}</span>
        </div>
        <div class="release">
        <p>Release Date: </p>
        <span>${movie.release_date}</span>
        </div>
        <h4>Overview: </h4>
        <p>${movie.overview}</p>
        </div>
        `
        
        movieBox1.append(div)
        
    })
}
const showMovies2 =  (data) => {
    // console.log(data);   
    movieBox2.innerHTML = ''

    data.forEach((movie)=>{
        console.log(movie);
        let div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML= `
        <img src="${ImgPath+movie.poster_path}" alt="${movie.title}">
        <div class="overlay">
        <div class="title">
        <h2>${movie.title}</h2>
        <span>IMDB: ${movie.vote_average}</span>
        </div>
        <div class="release">
        <p>Release Date: </p>
        <span>${movie.release_date}</span>
        </div>
        <h4>Overview: </h4>
        <p>${movie.overview}</p>
        </div>
        `
        
        movieBox2.append(div)
        
    })
}
const showMovies3 =  (data) => {
    // console.log(data);   
    movieBox3.innerHTML = ''

    data.forEach((movie)=>{
        console.log(movie);
        let div = document.createElement('div')
        div.classList.add('box')
        div.innerHTML= `
        <img src="${ImgPath+movie.poster_path}" alt="${movie.title}">
        <div class="overlay">
        <div class="title">
        <h2>${movie.title}</h2>
        <span>IMDB: ${movie.vote_average}</span>
        </div>
        <div class="release">
        <p>Release Date: </p>
        <span>${movie.release_date}</span>
        </div>
        <h4>Overview: </h4>
        <p>${movie.overview}</p>
        </div>
        `
        
        movieBox3.append(div)
        
    })
}

document.querySelector('#searchBox').addEventListener('keyup', (e)=>{
    // console.log(e.target.value);
    if(e.target.value !== ''){
        getMovies1(SearchAPI+e.target.value)
    }else{
        getMovies1(API1)
        getMovies2(API2)
        getMovies3(API3)
    }
})

getMovies1(API1)
getMovies2(API2)
getMovies3(API3)