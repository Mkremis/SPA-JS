import { Header } from "./components/Header.js";
import { MenuModal } from "./components/MenuModal.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";
import { hamburger } from "./components/hamburger.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(MenuModal());
  $root.appendChild(Main());
  $root.appendChild(hamburger());
  $root.appendChild(Loader());
  Router();
  InfiniteScroll();
}
