export const overayContainer = document.querySelector(
  ".character-info__overlay"
);
export const getAccordianBtn = () => {
  return document.querySelector(".accordion-button");
};

export const renderModal = ({ charData, img }, animation = true) => {
  const renderImg = (img) => {
    return ` <div class="container-sm ">
    <img
      style="width: 28rem"
      class="img-fluid rounded"
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

  overayContainer.innerHTML = "";

  const modalHtml = ` <div class="character-info__modal ${
    animation ? `modal__fade-in` : "modal__fade-out"
  } bg-success pt-3 pb-3 rounded">
 ${renderImg(img)}
  <div class="accordion container-fluid mt-2" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button bg-dark text-light w-100"
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

  overayContainer.insertAdjacentHTML("beforeend", modalHtml);
};

export const toggleOverlay = () => {
  overayContainer.classList.toggle("d-flex");
  overayContainer.classList.toggle("d-none");
};

const toggleAccordian = () => {};

// accordianBtnEl.addEventListener("click", function () {
// const toggle = document.querySelector("#collapseOne");
// toggle.classList.toggle("show");
// });

// console.log(accordianBtnEl);

export const errorModal = () => {
  overayContainer.innerHTML = "";
  const errorHtml = `<div class="text-danger error bg-dark p-3 text-center d-flex justify-content-center align-items-center flex-column"><div >AN ERROR HAS OCCURED</div>
  <button type="button" class="btn btn-outline-danger relaod-btn">Reload</button>
  </div>`;
  overayContainer.insertAdjacentHTML("beforeend", errorHtml);
};
