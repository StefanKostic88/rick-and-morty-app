import {
  getCharData,
  state,
  checkAndUpdateBookmarkedStatus,
  addAndRemoveBookMarkStatus,
  generateCurentPaginationState,
  generatePaginationData,
  getCharacterInfo,
} from "./model.js";
import {
  renderPage,
  renderPagination,
  cardsContainer,
  paginationContainer,
  renderModal,
  overayContainer,
} from "./view.js";

const initFirstPage = () => {
  const paginationData = generatePaginationData(state.pages);
  renderPagination(paginationData);
  getCharData()
    .then((data) => {
      state.currentCharPage = [...data];
      state.currentCharPage = [
        ...checkAndUpdateBookmarkedStatus(
          state.currentCharPage,
          state.likedCards
        ),
      ];
      renderPage(state.currentCharPage);
      cardsContainer.addEventListener("click", toggleLike);
    })
    .catch((err) => {
      console.log(err);
    });
};
paginationContainer.addEventListener("click", function (e) {
  const selectedPage = +e.target.dataset.page;
  state.pages = { ...generateCurentPaginationState(selectedPage) };
  const paginationData = generatePaginationData(state.pages);
  renderPagination(paginationData);
  getCharData(selectedPage).then((data) => {
    state.currentCharPage = [...data];
    state.currentCharPage = [
      ...checkAndUpdateBookmarkedStatus(
        state.currentCharPage,
        state.likedCards
      ),
    ];
    renderPage(state.currentCharPage);
  });
});

const toggleLike = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const cardId = +e.target.closest(".card").id;
  state.currentCharPage = [
    ...addAndRemoveBookMarkStatus(state.currentCharPage, cardId),
  ];
  renderPage(state.currentCharPage);
};

// const paginationData = generatePaginationData(state.pages);
// renderPagination(paginationData);

initFirstPage();

const controlModal = () => {};

cardsContainer.addEventListener("click", function (e) {
  if (!e.target.closest(".img-container")) return;
  const cardId = +e.target.closest(".card").id;
  getCharacterInfo(cardId).then((data) => {
    toggleOverlay();
    renderModal(data);
  });
});
window.document.addEventListener("click", function (e) {
  if (e.target.classList.contains("character-info__overlay")) {
    toggleOverlay();
  }
});

const toggleOverlay = () => {
  overayContainer.classList.toggle("d-flex");
  overayContainer.classList.toggle("d-none");
};
// const acc = document.querySelector(".accordion-button");
// console.log(acc);
// acc.addEventListener("click", function () {
//   const toggle = document.querySelector("#collapseOne");
//   toggle.classList.toggle("show");
// });
