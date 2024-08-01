
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = document.querySelector("#cityNow");
  city.innerHTML = searchInputElement.value;

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);