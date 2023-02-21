import {
  getCharData,
  state,
  checkAndUpdateBookmarkedStatus,
  addAndRemoveBookMarkStatus,
  generateCurentPaginationState,
  generatePaginationData,
  getCharacterInfo,
} from "./model.js";
import { renderPage, cardsContainer, logoEl } from "./cardsView/cardsView.js";

import {
  renderPagination,
  paginationContainer,
} from "./paginationView/paginationView.js";
import {
  renderModal,
  overayContainer,
  toggleOverlay,
  getAccordianBtn,
  errorModal,
} from "./modalView/modalView.js";

//Init First Page

const init = () => {
  initFirstPage();
  logoEl.addEventListener("click", controlLogoClick);
  paginationContainer.addEventListener("click", controlPagination);
  cardsContainer.addEventListener("click", controlOpenModal);
  overayContainer.addEventListener("click", controlCloseModal);
};

const initFirstPage = () => {
  state.pages = { ...generateCurentPaginationState(1) };
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
      controlError();
    });
};

const controlLogoClick = () => {
  initFirstPage();
};
//Pagination

const controlPagination = (e) => {
  if (!+e.target.closest("a")?.dataset.page) return;

  const selectedPage = +e.target.closest("a").dataset.page;
  state.pages = { ...generateCurentPaginationState(selectedPage) };
  const paginationData = generatePaginationData(state.pages);
  renderPagination(paginationData);

  getCharData(selectedPage)
    .then((data) => {
      state.currentCharPage = [...data];
      state.currentCharPage = [
        ...checkAndUpdateBookmarkedStatus(
          state.currentCharPage,
          state.likedCards
        ),
      ];

      renderPage(state.currentCharPage);
    })
    .catch((err) => {
      controlError();
    });
};

//likes
const toggleLike = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const cardId = +e.target.closest(".card").id;
  state.currentCharPage = [
    ...addAndRemoveBookMarkStatus(state.currentCharPage, cardId),
  ];
  renderPage(state.currentCharPage);
};
//Modal window

const controlOpenModal = (e) => {
  if (!e.target.closest(".img-container")) return;
  const cardId = +e.target.closest(".card").id;
  state.curId = cardId;
  getCharacterInfo(cardId).then((data) => {
    toggleOverlay();
    renderModal(data);
    getAccordianBtn().addEventListener("click", () => {
      const toggle = document.querySelector("#collapseOne");
      toggle.classList.toggle("show");
    });
  });
};

const controlCloseModal = (e) => {
  if (e.target.classList.contains("character-info__overlay")) {
    getCharacterInfo(state.curId).then((data) => {
      renderModal(data, false);
    });
    setTimeout(() => {
      toggleOverlay();
    }, 1000);
  }
};

//errors
const controlError = () => {
  toggleOverlay();
  errorModal();

  document.querySelector(".relaod-btn").addEventListener("click", () => {
    toggleOverlay();
    initFirstPage();
  });
};

init();
