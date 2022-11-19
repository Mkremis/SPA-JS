import { Components } from "./Components.js";

export function PostCards(props) {
  // console.log(props);
  let { _embedded, date, id, slug, title } = props,
    dateFormat = new Date(date).toLocaleTimeString(),
    img = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "appassets\favicon.svg";
  title = title.rendered;

  let card = new Components({ img, title, dateFormat, slug, id });
  return card.CardMaker();
}
