import { PATHS } from "./Routes.js";
import { Router } from "./Router.js";

const ROUTER = new Router(PATHS);
window.onpopstate = (event) => {
  new Router(PATHS);
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};
document.addEventListener("click", (e) => {
  ROUTER.load(e.target.value);
});
