export function Title(logo) {
  const $div = document.createElement("div");
  $div.classList.add("logo");
  $div.innerHTML = `${logo}`;
  return $div;
}
