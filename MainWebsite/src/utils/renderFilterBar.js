export default function renderFilterBar(filters) {
  const filterContainer = document.querySelector(".filter-container__filters");

  const markup = filters
    .map(
      (filter) => `
    <button type="button" class="filter" data-field="${filter}">
        ${filter}
        <span><img src="./images/icon-remove.svg" alt="Remove icon"/></span>
    </button>
    `
    )
    .join("");

  filterContainer.innerHTML = markup;
}

