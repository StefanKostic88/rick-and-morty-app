export const paginationContainer = document.querySelector(".pagination");
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
  console.log(prevPage);
  const html = `<li class="page-item bg-dark ${prevPage ? "" : "disabled"}">
                  <a
                    class="page-link bg-dark text-light"
                    href="#"
                    aria-label="Previous"
                    data-page="${prevPage}"
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
