const cardsContainer = document.getElementById("character-container");
const paginationContainer = document.querySelector(".pagination");

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

const renderPagination = () => {
  const html = `<li class="page-item bg-dark">
  <a
    class="page-link bg-dark text-light"
    href="#"
    aria-label="Previous"
  >
    <span aria-hidden="true">&laquo;</span>
  </a>
</li>
${renderSideBtn(null, null, 1, 2)}
<li class="page-item">
  <a class="page-link active success" href="#">1</a>
</li>
${renderSideBtn(4, 5, null, 7)}
<li class="page-item bg-dark">
  <a class="page-link bg-dark text-light" href="#" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </a>
</li>`;
  paginationContainer.insertAdjacentHTML("beforeend", html);
};

const renderSideBtn = (next, nextTwo, nextThree, nextFive) => {
  return `<li class="page-item ${
    next ? "" : "d-none"
  }"><a class="page-link" href="#">${next}</a></li>
<li class="page-item ${
    nextTwo ? "" : "d-none"
  }"><a class="page-link" href="#">${nextTwo}</a></li>
<li class="page-item ${
    nextThree ? "" : "d-none"
  }"><a class="page-link" href="#">${nextThree}</a></li>
<li class="page-item ${
    nextFive ? "" : "d-none"
  }"><a class="page-link" href="#">${nextFive}</a></li>`;
};

console.log(renderSideBtn(4, 5, null, 7));
console.log(renderSideBtn(null, null, 1, 2));

renderPagination();
