import {
  getCharData,
  state,
  checkAndUpdateBookmarkedStatus,
  addAndRemoveBookMarkStatus,
  generateCurentPaginationState,
  generatePaginationData,
} from "./model.js";
import {
  renderPage,
  renderPagination,
  cardsContainer,
  paginationContainer,
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

// initFirstPage();
const paginationData = generatePaginationData(state.pages);
renderPagination(paginationData);

const acc = document.querySelector(".accordion-button");
console.log(acc);
acc.addEventListener("click", function () {
  const toggle = document.querySelector("#collapseOne");
  toggle.classList.toggle("show");
});
