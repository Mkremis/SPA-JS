import { Components } from "./Components.js";
export function SearchMusic(props) {
  // console.log(props);
  let {
      id,
      full_title,
      header_image_thumbnail_url,
      primary_artist,
      release_date_for_display,
      url,
    } = props.result,
    artist = primary_artist.name,
    title = full_title,
    dateFormat = release_date_for_display,
    img = header_image_thumbnail_url || "appassets\favicon.svg",
    slug = url;

  let card = new Components({ id, title, img, artist, dateFormat, slug });
  return card.HitCard();
}
