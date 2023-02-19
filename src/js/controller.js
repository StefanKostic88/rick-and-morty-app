import {
  getCharData,
  state,
  checkAndUpdateBookmarkedStatus,
  addAndRemoveBookMarkStatus,
} from "./model.js";
import { renderPage } from "./view.js";

const cardContainerEl = document.querySelector("#character-container");

const initFirstPage = () => {
  getCharData().then((data) => {
    state.currentCharPage = [...data];
    state.currentCharPage = [
      ...checkAndUpdateBookmarkedStatus(
        state.currentCharPage,
        state.likedCards
      ),
    ];
    renderPage(state.currentCharPage);
    cardContainerEl.addEventListener("click", toggleLike);
  });
};

const toggleLike = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const cardId = +e.target.closest(".card").id;
  state.currentCharPage = [
    ...addAndRemoveBookMarkStatus(state.currentCharPage, cardId),
  ];
  renderPage(state.currentCharPage);
};

// initFirstPage();

const controlPages = (curPage) => {
  getCharData(curPage).then((data) => {
    state.currentCharPage = [...data];
    state.currentCharPage = [
      ...checkAndUpdateBookmarkedStatus(
        state.currentCharPage,
        state.likedCards
      ),
    ];
    renderPage(state.currentCharPage);
    cardContainerEl.addEventListener("click", toggleLike);
  });
};

controlPages(1);
