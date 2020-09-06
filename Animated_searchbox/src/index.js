const searchbox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const searchInput = document.querySelector('input');
const searchData = document.querySelector('.search-data');

searchBtn.addEventListener('click', () => {
    searchbox.classList.add('active');
    searchBtn.classList.add('active');
    searchInput.classList.add('active');
    cancelBtn.classList.add('active');
    searchInput.focus();

    if (searchInput.value != "") {
        let values = searchInput.value;
        searchData.classList.remove('active');
        searchData.innerHTML = "You just typed " + "<span style='font-weight:500;'>" + values + "</span>";
    } else {
        searchData.textContent = "";
    }
});

cancelBtn.addEventListener('click', () => {
    searchbox.classList.remove('active');
    searchBtn.classList.remove('active');
    searchInput.classList.remove('active');
    cancelBtn.classList.remove('active');
    searchData.classList.toggle('active');
    searchInput.value = "";
});