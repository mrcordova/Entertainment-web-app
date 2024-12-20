const dataResponse = await fetch("data.json");
const data = await dataResponse.json();

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

for (const mediumObj of data) {
  if (mediumObj.isTrending) {
    trendingSlider.insertAdjacentHTML(
      "beforeend",
      `<div class="img-con" data-title="${mediumObj.title}" data-category="${
        mediumObj.category
      }">
            <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
        mediumObj.title
      }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
            <picture>
            <source
            media="(min-width:48rem)"
            srcset="
            ${mediumObj.thumbnail.trending.large}
            " />
            <img
            class="trending-img"
            loading="lazy"
            src="${mediumObj.thumbnail.trending.small}"
            alt="" />
            </picture>
            </div>
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
               <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
        mediumObj.title
      }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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

function updateCards(id, clone) {
  const container = clone.getElementById(`${id}`);
  for (const mediumObj of data) {
    if (container.id == "home") {
      if (mediumObj.isTrending) {
        container.children[0].children[1].insertAdjacentHTML(
          "beforeend",
          `<div class="img-con" data-title="${
            mediumObj.title
          }" data-category="${mediumObj.category}">
             <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
            mediumObj.title
          }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
            <picture>
            <source
            media="(min-width: 48rem)"
            srcset="
            ${mediumObj.thumbnail.trending.large}
            " />
            <img
            class="trending-img"
            loading="lazy"
            src="${mediumObj.thumbnail.trending.small}"
            alt="" />
            </picture>
            </div>
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
               <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
            mediumObj.title
          }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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
              <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
            mediumObj.title
          }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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
               <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
            mediumObj.title
          }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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
               <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
              mediumObj.title
            }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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
              <label class="bookmark-con">
                    <svg alt="not bookmarked" width='12' height='14' xmlns='http://www.w3.org/2000/svg'><path d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z' stroke='currentColor' stroke-width='1.5' fill='currentColor'/></svg>
                <input ${
                  mediumObj.isBookmarked ? "checked" : ""
                } type="checkbox" name="bookmarks" id="bookmark-${
              mediumObj.title
            }">
              </label>
              <div class="picture-con">
              <dialog open>
                <div class="outfit-medium">
                  <img src="./assets/icon-play.svg" alt="play">
                  Play
                </div>
              </dialog>
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
              </div>
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
  const clone = templates[e.currentTarget.id].content.cloneNode(true);
  searchInput.setAttribute("data-search", e.currentTarget.id);
  updateCards(e.currentTarget.id, clone);

  clone.children[0].addEventListener("click", (e) => {
    e.preventDefault();
    const label = e.target.closest("label.bookmark-con");
    if (label) {
      const input = label.querySelector("input");
      input.checked = !input.checked;

      document.activeElement?.blur && document.activeElement.blur();
      for (const medium of data) {
        if (input.id.includes(medium.title)) {
          medium.isBookmarked = !medium.isBookmarked;
        }
      }
    }
  });

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

  cards.forEach((card) => {
    console.log(card);
    const title = card.dataset.title.toLowerCase();
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
