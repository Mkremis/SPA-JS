export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");
  $input.type = "search";
  $input.name = "search";
  $input.autocomplete = "off";
  $input.style.display = "none";
  $form.classList.add("search-form");
  $form.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.style.display = "block";
    $input.placeholder = "Buscar posts..";
    $input.value = localStorage.getItem("wpSearch");
  }
  if (location.hash.includes("#/music")) {
    $input.style.display = "block";
    $input.placeholder = "Buscar artista..";
    $input.value = localStorage.getItem("musicSearch");
  }
  if (location.hash.includes("#/artist")) {
    $input.style.display = "block";
    $input.placeholder = "Escuchar musica..";
    $input.value = localStorage.getItem("artistSearch");
  }
  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.clear("wpSearch");
  });

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    if (location.hash.includes("#/search")) {
      localStorage.setItem("wpSearch", e.target.search.value);
      location.hash = `#/search?search=${e.target.search.value}`;
    }
    if (location.hash.includes("#/music")) {
      localStorage.setItem("musicSearch", e.target.search.value);
      location.hash = `#/music=${e.target.search.value}`;
    }
    if (location.hash.includes("#/artist")) {
      localStorage.setItem("artistSearch", e.target.search.value);
      location.hash = `#/artist=${e.target.search.value}`;
    }
  });

  return $form;
}
