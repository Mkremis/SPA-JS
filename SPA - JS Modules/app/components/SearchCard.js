import { Components } from "./Components.js";
export function SearchCard(props) {
  // console.log(props);
  let { id, title, _embedded } = props,
    slug = _embedded.self[0].slug,
    date = _embedded.self[0].date,
    img = _embedded.self[0].yoast_head_json.og_image
      ? _embedded.self[0].yoast_head_json.og_image[0].url
      : "app/assets/favicon.svg",
    dateFormat = new Date(date).toLocaleTimeString();

  let card = new Components({ img, title, dateFormat, slug, id });
  return card.CardMaker();
}
