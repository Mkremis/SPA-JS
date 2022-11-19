export function MenuModal() {
  const $menuModal = document.createElement("aside");
  $menuModal.classList.add("panel");
  $menuModal.innerHTML = `
  <nav class = "menu"> 
  <a href="#/">Home</a>
  <a href="#/search" class="search-link">Posts</a>
   <a href="#/music" class="search-link">Musica</a>
   <a href="#/artist"class="search-link">Deezer</a>
  <a href="#/Contacto">Contacto</a>
  </nav>`;
  return $menuModal;
}
