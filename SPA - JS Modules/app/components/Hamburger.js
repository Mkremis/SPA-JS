export function hamburger() {
  const $menuHamburger = document.createElement("button");
  $menuHamburger.classList.add("panel-btn", "hamburger", "hamburger--elastic");
  $menuHamburger.type = "button";
  $menuHamburger.innerHTML = `<span class="hamburger-box"><span class="hamburger-inner"></span></span>`;
  return $menuHamburger;
}
