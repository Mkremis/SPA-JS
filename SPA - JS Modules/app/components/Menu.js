export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu-top");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <span>-</span>
  <a href="#/search" class="search-link">Posts</a>
  <span>-</span>
   <a href="#/music" class="search-link">Musica</a>
  <span>-</span>
   <a href="#/artist"class="search-link">Deezer</a>
  <span>-</span>
  <a href="#/Contacto">Contacto</a>
  `;
  return $menu;
}
