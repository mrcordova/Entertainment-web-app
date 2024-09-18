// const API_KEY = "d2b76dbf";
// const URL = `http://omdbapi.com/?apikey=${API_KEY}&s=time&type=movie`;
// const dataResponse = await fetch(URL);
// console.log(await dataResponse.json());
const dataResponse = await fetch("data.json");
const data = await dataResponse.json();

// console.log(data);

const inputs = document.querySelectorAll("input[type='radio']");
const movieTemplate = document.getElementById("movie-template");
const tvTemplate = document.getElementById("tv-template");
const bookmarksTemplate = document.getElementById("bookmarks-template");
const homeTemplate = document.getElementById("home-template");
const searchInput = document.getElementById("search");
const mainEle = document.querySelector("main");

const templates = {
  home: homeTemplate,
  tv: tvTemplate,
  movie: movieTemplate,
  bookmarks: bookmarksTemplate,
};

const category = {
  Movie: "movie",
  "TV Series": "tv",
};
const clone = templates.home.content.cloneNode(true);
const trendingSlider = clone.querySelector(".trending-slider");
const recommendCon = clone.querySelector(".recommend-con");
console.log(data);
for (const mediumObj of data) {
  //   console.log(mediumObj);
  if (mediumObj.isTrending) {
    trendingSlider.insertAdjacentHTML(
      "beforeend",
      `<div class="img-con" data-title="${mediumObj.title}" data-category="${
        mediumObj.category
      }">
            <div class="bookmark-con">
            <img
            src=${
              mediumObj.isBookmarked
                ? "./assets/icon-bookmark-full.svg"
                : "./assets/icon-bookmark-empty.svg"
            }
            alt='${
              mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
            }'  />
            </div>
            <picture>
            <source
            media="(min-width: 90rem)"
            srcset="
            ${mediumObj.thumbnail.trending.large}
            " />
            <img
            class="trending-img"
            loading="lazy"
            src="${mediumObj.thumbnail.trending.small}"
            alt="" />
            </picture>
            <div class="trending-details">
            <div class="rating-con">
            <p>${mediumObj.year}</p>
            &#9679;
            <div class="cate-con">
            <img
            src="./assets/icon-category-${category[mediumObj.category]}.svg"
                alt="${mediumObj.category} category" />
                <p>${mediumObj.category}</p>
                </div>
                &#9679;
                <p>${mediumObj.rating}</p>
                </div>
                <h2 class="outfit-medium title">${mediumObj.title}</h2>
                </div>
                </div>`
    );
  } else {
    recommendCon.insertAdjacentHTML(
      "beforeend",
      `<div class="recommend-card outfit-light" data-title="${
        mediumObj.title
      }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
                <img
                  src=${
                    mediumObj.isBookmarked
                      ? "./assets/icon-bookmark-full.svg"
                      : "./assets/icon-bookmark-empty.svg"
                  }
                  alt=${
                    mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
                  }  />
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
    );
  }
}
mainEle.appendChild(clone);

const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      //   console.log(mutation);
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(mainEle, config);
function updateCards(id, clone) {
  const container = clone.getElementById(`${id}`);
  //   console.log(container.id);
  for (const mediumObj of data) {
    if (container.id == "home") {
      if (mediumObj.isTrending) {
        container.children[0].children[1].insertAdjacentHTML(
          "beforeend",
          `<div class="img-con" data-title="${
            mediumObj.title
          }" data-category="${mediumObj.category}">
            <div class="bookmark-con">
            <img
            src=${
              mediumObj.isBookmarked
                ? "./assets/icon-bookmark-full.svg"
                : "./assets/icon-bookmark-empty.svg"
            }
            alt='${
              mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
            }'  />
            </div>
            <picture>
            <source
            media="(min-width: 90rem)"
            srcset="
            ${mediumObj.thumbnail.trending.large}
            " />
            <img
            class="trending-img"
            loading="lazy"
            src="${mediumObj.thumbnail.trending.small}"
            alt="" />
            </picture>
            <div class="trending-details">
            <div class="rating-con">
            <p>${mediumObj.year}</p>
            &#9679;
            <div class="cate-con">
            <img
            src="./assets/icon-category-${category[mediumObj.category]}.svg"
                alt="${mediumObj.category} category" />
                <p>${mediumObj.category}</p>
                </div>
                &#9679;
                <p>${mediumObj.rating}</p>
                </div>
                <h2 class="outfit-medium title">${mediumObj.title}</h2>
                </div>
                </div>`
        );
      } else {
        container.children[1].insertAdjacentHTML(
          "beforeend",
          `<div class="recommend-card outfit-light" data-title="${
            mediumObj.title
          }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
                <img
                  src=${
                    mediumObj.isBookmarked
                      ? "./assets/icon-bookmark-full.svg"
                      : "./assets/icon-bookmark-empty.svg"
                  }
                  alt='${
                    mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
                  }'  />
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
        );
      }
    } else {
      if (container.id === "movie" && mediumObj.category == "Movie") {
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="recommend-card outfit-light" data-title="${
            mediumObj.title
          }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
                 ${
                   mediumObj.isBookmarked
                     ? `<svg  alt="bookmarked" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" stroke='currentColor' stroke-width='1.5' fill="currentColor"/></svg>`
                     : `<svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>`
                 }
               
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
        );
      } else if (container.id === "tv" && mediumObj.category == "TV Series") {
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="recommend-card outfit-light" data-title="${
            mediumObj.title
          }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
                <img
                  src=${
                    mediumObj.isBookmarked
                      ? "./assets/icon-bookmark-full.svg"
                      : "./assets/icon-bookmark-empty.svg"
                  }
                  alt='${
                    mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
                  }'  />
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
        );
      } else if (container.id === "bookmarks") {
        if (mediumObj.isBookmarked && mediumObj.category === "Movie") {
          container.children[0].insertAdjacentHTML(
            "beforeend",
            `<div class="recommend-card outfit-light" data-title="${
              mediumObj.title
            }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
                <img
                  src=${
                    mediumObj.isBookmarked
                      ? "./assets/icon-bookmark-full.svg"
                      : "./assets/icon-bookmark-empty.svg"
                  }
                  alt='${
                    mediumObj.isBookmarked ? "bookmarked" : "not bookmarked"
                  }'   />
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
          );
        } else if (
          mediumObj.isBookmarked &&
          mediumObj.category == "TV Series"
        ) {
          container.children[1].insertAdjacentHTML(
            "beforeend",
            `<div class="recommend-card outfit-light" data-title="${
              mediumObj.title
            }" data-category="${mediumObj.category}">
              <div class="bookmark-con">
              ${
                mediumObj.isBookmarked
                  ? `<svg  alt="bookmarked" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="currentColor"/></svg>`
                  : `<svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>`
              }
               
              </div>
              <picture>
                <source
                  media="(min-width: 90rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.large}
                  " />
                <source
                  media="(min-width: 48rem)"
                  srcset="
                    ${mediumObj.thumbnail.regular.medium}
                  " />
                <img
                  loading="lazy"
                  src="${mediumObj.thumbnail.regular.small}"
                  alt="the great lands" />
              </picture>
              <div class="trending-details">
                <div class="rating-con">
                  <p>${mediumObj.year}</p>
                  &bull;
                  <div class="cate-con">
                    <img
                      src="./assets/icon-category-${
                        category[mediumObj.category]
                      }.svg"
                      alt="${mediumObj.category} category" />
                    <p>${mediumObj.category}</p>
                  </div>
                  &bull;
                  <p>${mediumObj.rating}</p>
                </div>
                <h3 class="outfit-medium title">${mediumObj.title}</h3>
              </div>
            </div>`
          );
        }
      }
    }
  }
}

function changePage(e) {
  //   console.log(mainEle.children[1]);
  const clone = templates[e.currentTarget.id].content.cloneNode(true);
  searchInput.setAttribute("data-search", e.currentTarget.id);
  updateCards(e.currentTarget.id, clone);

  clone.children[0].addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "SVG") {
      const altText = e.target.getAttribute("alt");
      if (altText.startsWith("bookmarked")) {
        e.target.setAttribute("src", "./assets/icon-bookmark-empty.svg");
        e.target.setAttribute("alt", "not bookmarked");
      } else if (altText.startsWith("not bookmarked")) {
        e.target.setAttribute("src", "./assets/icon-bookmark-full.svg");
        e.target.setAttribute("alt", "bookmarked");
      }
    }
  });
  //   console.log(container);
  //   updateCards(clone);
  mainEle.replaceChild(clone, mainEle.lastElementChild);
  searchInput.value = "";
}

for (const input of inputs) {
  input.addEventListener("click", changePage);
}

searchInput.addEventListener("input", (e) => {
  let cards = mainEle.querySelectorAll(".recommend-card");
  let header = mainEle.querySelector("[data-header]");

  if (mainEle.lastElementChild.id == "home") {
    cards = [
      ...cards,
      ...mainEle.lastElementChild.querySelectorAll(".img-con"),
    ];
  }
  let amountFound = 0;

  //   console.log(mainEle.querySelector("h2"));

  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    // console.log(title.includes(e.currentTarget.value.toLowerCase()));
    if (title.includes(e.currentTarget.value.toLowerCase())) {
      card.style.display = "flex";
      amountFound++;
    } else {
      card.style.display = "none";
    }
  });

  header.textContent =
    e.currentTarget.value == ""
      ? header.dataset.header
      : `Found ${amountFound} results for '${e.currentTarget.value}'`;
});
