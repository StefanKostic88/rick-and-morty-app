export const cardsContainer = document.getElementById("character-container");
export const paginationContainer = document.querySelector(".pagination");

const overlayEl = document.querySelector(".character-info__overlay");

export const renderPage = (arr) => {
  cardsContainer.innerHTML = "";
  const html = arr.map((card) => renderCard(card)).join("");
  cardsContainer.insertAdjacentHTML("beforeend", html);
};

const renderCard = ({ name, id, img, isLiked }) => {
  return `<div class="col d-flex justify-content-center align-items-center">
             <div class="card mt-3 mb-3" style="width: 18rem" id="${id}">
             <div class="img-container rounded-top">
                <img
                    src=${img}
                    class="card-img-top"
                    alt="character-image"
                />
                <div class="details  d-flex justify-content-center align-items-center">
                  <h4 class="text-light">View more</h4>
                </div>
                </div>
                <div class="card-body d-flex justify-content-center flex-column">
                    <h5 class="card-title fw-bolder">${name}</h5>
                    <button type="button" class="btn btn-outline-success ${
                      isLiked ? "active" : ""
                    }">
                    <i class="bi bi-hand-thumbs-up"></i>
                    Like
                    </button>
                </div>
            </div>
          </div>`;
};

export const renderPagination = ({
  prevFourPages,
  prevThreePages,
  prevTwoPages,
  prevPage,
  curPage,
  nextPage,
  nextTwoPages,
  nextThreePages,
  nextFourPages,
}) => {
  paginationContainer.innerHTML = "";
  const html = `<li class="page-item bg-dark">
                  <a
                    class="page-link bg-dark text-light"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                  </li>
                  ${renderSideBtn(
                    prevFourPages,
                    prevThreePages,
                    prevTwoPages,
                    prevPage
                  )}
                  <li class="page-item">
                    <a class="page-link active success" href="#">${curPage}</a>
                  </li>
                  ${renderSideBtn(
                    nextPage,
                    nextTwoPages,
                    nextThreePages,
                    nextFourPages
                  )}
                  <li class="page-item bg-dark">
                    <a class="page-link bg-dark text-light" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>`;
  paginationContainer.insertAdjacentHTML("beforeend", html);
};

const renderSideBtn = (itr, itrTwo, itrThree, itrFour) => {
  return `<li class="page-item ${
    itr ? "" : "d-none"
  }"><a class="page-link" href="#" data-page="${itr}">${itr}</a></li>
<li class="page-item ${
    itrTwo ? "" : "d-none"
  }"><a class="page-link" href="#" data-page="${itrTwo}">${itrTwo}</a></li>
<li class="page-item ${
    itrThree ? "" : "d-none"
  }"><a class="page-link" href="#" data-page="${itrThree}">${itrThree}</a></li>
<li class="page-item ${
    itrFour ? "" : "d-none"
  }"><a class="page-link" href="#"  data-page="${itrFour}">${itrFour}</a></li>`;
};

export const renderModal = ({ charData, img }) => {
  console.log(charData, img);

  const renderImg = (img) => {
    return ` <div class="container-sm">
    <img
      style="width: 22rem"
      class="img-fluid"
      src=${img}
      alt=""
    />
  </div>`;
  };

  const renderAccordianList = (characterData) => {
    return characterData

      .map((char) => {
        console.log();
        return ` <h5
            class="d-flex flex-column flex-sm-row justify-content-between"
          >
            <span class="mb-1 text-success">${`${Object.keys(char)[0]
              .slice(0, 1)
              .toUpperCase()}${Object.keys(char)[0].slice(
              1
            )}`}:</span><span> ${Object.values(char)}</span>
          </h5>`;
      })
      .join("");
  };

  overlayEl.innerHTML = "";

  const modalHtml = ` <div class="character-info__modal">
 ${renderImg(img)}
  <div class="accordion container-fluid mt-2" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button bg-success text-light w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Character Info
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
         ${renderAccordianList(charData)}
        </div>
      </div>
    </div>
  </div>
</div>`;
  overlayEl.insertAdjacentHTML("beforeend", modalHtml);
};
