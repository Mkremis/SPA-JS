import { Components } from "./Components.js";
export function Deezer(props) {
  // console.log(props);
  let {
      album: { cover_big, title },
      artist: { link, name, picture_medium },
      preview,
      title_short,
      duration,
    } = props,
    album_cover = cover_big,
    track_link = props.link,
    slug = link,
    artist = name,
    img = picture_medium;

  let card = new Components({
    img,
    title,
    slug,
    artist,
    album_cover,
    preview,
    title_short,
    track_link,
    duration,
  });
  return card.DeezerCard();
}
