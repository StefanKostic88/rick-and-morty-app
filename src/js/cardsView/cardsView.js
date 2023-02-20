export const cardsContainer = document.getElementById("character-container");

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

// const overayContainer = document.querySelector("character-info__overlay");
