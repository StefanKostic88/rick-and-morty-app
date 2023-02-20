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

  const html = `<li class="page-item bg-dark ${prevPage ? "" : "disabled"}">
                  <a href="#" class="page-link bg-dark text-light" data-page="${prevPage}">
                    <span >&laquo;</span>
                  </a>
                </li>
                  <li class="page-item ${
                    prevFourPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevFourPages}">${prevFourPages}</a></li>
                  <li class="page-item ${
                    prevThreePages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevThreePages}">${prevThreePages}</a></li>
                  <li class="page-item ${
                    prevTwoPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevTwoPages}">${prevTwoPages}</a></li>
                <li class="page-item ${
                  prevPage ? "" : "d-none"
                }"><a class="page-link" href="#"  data-page="${prevPage}">${prevPage}</a></li>
                  <li class="page-item">
                    <a class="page-link active success" href="#">${curPage}</a>
                  </li>
                  <li class="page-item ${
                    nextPage ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextPage}">${nextPage}</a></li>
                  <li class="page-item ${
                    nextTwoPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextTwoPages}">${nextTwoPages}</a></li>
                  <li class="page-item ${
                    nextThreePages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextThreePages}">${nextThreePages}</a></li>
                  <li class="page-item ${
                    nextFourPages ? "" : "d-none"
                  }"><a class="page-link" href="#"  data-page="${nextFourPages}">${nextFourPages}</a></li>
                
                  <li class="page-item bg-dark  ${nextPage ? "" : "disabled"}">
                    <a class="page-link bg-dark text-light" href="#"  aria-label="Next"  data-page="${nextPage}">
                      <span>&raquo;</span>
                    </a>
                  </li>`;
  paginationContainer.insertAdjacentHTML("beforeend", html);
};
