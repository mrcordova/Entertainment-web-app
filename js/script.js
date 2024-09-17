// const API_KEY = "d2b76dbf";
// const URL = `http://omdbapi.com/?apikey=${API_KEY}&s=time&type=movie`;
// const dataResponse = await fetch(URL);
// console.log(await dataResponse.json());
const dataResponse = await fetch("data.json");
const data = await dataResponse.json();

console.log(data);

const inputs = document.querySelectorAll("input[type='radio']");
const movieTemplate = document.getElementById("movie-template");
const tvTemplate = document.getElementById("tv-template");
const bookmarksTemplate = document.getElementById("bookmarks-template");
const home = document.getElementById("home");
const searchInput = document.getElementById("search");
const mainEle = document.querySelector("main");

const templates = {
  home: home,
  tv: tvTemplate,
  movie: movieTemplate,
  bookmark: bookmarksTemplate,
};
// const clone = movieTemplate.content.cloneNode(true);
// console.log(clone);
function changePage(e) {
  searchInput.setAttribute("data-search", e.currentTarget.id);
  mainEle.replaceChild(
    templates[e.currentTarget.id].content.cloneNode(true),
    mainEle.children[1]
  );
}

for (const input of inputs) {
  input.addEventListener("click", changePage);
}
