fetch("../data/albums.json")
  .then(res => res.json())
  .then(data => {
      renderAlbums(data);
  });

function renderAlbums(albums){
    const container = document.getElementById("list");

    albums.forEach(a => {
        container.innerHTML += `
            <a href="${a.path}" class="album-card">
                <div class="album-cover">
                    <img src="${a.cover}" alt="Meme collection">
                     <p>${a.coverBy}</p>
                </div>
                <div class="album-info">
                    <h3>${a.name}</h3>
                    <p>${a.memo}</p>
                </div>
            </a>
        `;
    });
}
