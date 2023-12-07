function loadImages(query) {
  const url = "https://api.pexels.com/v1/search?query=ocean&per_page=9";
  fetch(url, {
    headers: {
      Authorization: "CcYmuaishUPkWZ0N3uN7bDcyQgPzLl1kWPT0d9lWfD0MBaQEqgWDMWK5",
    },
  })
    .then((response) => response.json())
    .then((data) => displayImages(data.photos))
    .catch((error) => console.log("Error fetching images", error));
}

function displayImages(photos) {
  const album = document.querySelector(".album .row");
  album.innerHTML = "";
  photos.forEach((photo) => {
    const card = `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.photographer}" />
            <div class="card-body">
              <h5 class="card-title">${photo.photographer}</h5>
              <p class="card-text">${photo.id}</p>
              <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-sm btn-outline-secondary hide-card">
                  Hide
                </button>
              </div>
            </div>
          </div>
        </div> `;
    album.insertAdjacentHTML("beforeend", card);
  });
}
document.querySelector(".btn-primary").addEventListener("click", function () {
  currentQuery = "https://api.pexels.com/v1/search?query=nature&per_page=9";
  loadImages(currentQuery);
});

document.querySelector(".btn-secondary").addEventListener("click", function () {
  currentQuery = "https://api.pexels.com/v1/search?query=people&per_page=9";
  loadImages(currentQuery);
});
