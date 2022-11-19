import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Title } from "./Title.js";
import { PostCards } from "./PostCards.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";
import { SearchMusic } from "./SearchMusic.js";
import { Deezer } from "./Deezer.js";

export async function Router() {
  let { hash } = location;
  const $main = document.getElementById("main");
  $main.innerHTML = null;
  if (!hash || hash === "#/") {
    await ajax({
      url: "https://es.rollingstone.com/wp-json/wp/v2/media/25066",
      cbSuccess: (site) => {
        document
          .querySelector(".header")
          .insertAdjacentElement("beforeend", Title(site.description.rendered));
        document.querySelector(".attachment a").href =
          "https://es.rollingstone.com/";
        document.querySelector(".attachment a").target = "_blank";
      },
    });

    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let $template = "";
        posts.forEach((post) => ($template += PostCards(post)));

        $main.innerHTML = $template;
      },
    });
  } else if (hash.includes("#/search")) {
    await ajax({
      url: "https://es.rollingstone.com/wp-json/wp/v2/media/25066",
      cbSuccess: (site) => {
        document
          .querySelector(".header")
          .insertAdjacentElement("beforeend", Title(site.description.rendered));
        document.querySelector(".attachment a").href =
          "https://es.rollingstone.com/";
        document.querySelector(".attachment a").target = "_blank";
      },
    });

    let query = localStorage.getItem("wpSearch");
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }
    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        let $template = "";
        if (search.length === 0) {
          $template = `
          <p class="error">
              No se encontraron resultados con la busqueda: <mark>${query}</mark>
           </p>
           `;
        } else {
          search.forEach((post) => ($template += SearchCard(post)));
        }

        $main.innerHTML = $template;
      },
    });
  } else if (hash.includes("#/music")) {
    let siteInfo =
      "<a href='https://genius.com/' target='_blank'><img id = 'genius' src='/app/assets/genius-lyrics-696x442.png' alt='Genius'></a>";
    document
      .querySelector(".header")
      .insertAdjacentElement("beforeend", Title(siteInfo));

    let query = localStorage.getItem("musicSearch");
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.GENIUSAPI}${query}`,
      prop: {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ce19d0164fmsh3d383efc0e85ce5p16dcb1jsnb1a4a3c79541",
          "x-rapidapi-host": "genius.p.rapidapi.com",
        },
      },
      cbSuccess: ({ response }) => {
        // console.log(response);
        let $template = "";
        if (response.hits.length === 0) {
          $template = `
        <p class="error">
            No se encontraron resultados con la busqueda: <mark>${query}</mark>
         </p>
         `;
        } else {
          response.hits.forEach((hit) => ($template += SearchMusic(hit)));
        }
        $main.innerHTML = $template;
      },
    });
  } else if (hash.includes("#/artist")) {
    let query = localStorage.getItem("artistSearch");
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }
    await ajax({
      url: `${api.DEEZER}${query}`,
      prop: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "49d9c22181msh41372344189763fp1c86dajsn7ad9035f998d",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      },
      cbSuccess: (response) => {
        console.log(response);
        let $template = "";
        if (response.length === 0) {
          $template = `<p class="error">No se encontraron resultados con la busqueda: <mark>${query}</mark></p> `;
        } else {
          $main.classList.replace("grid-fluid", "flex-row");

          let { data } = response;
          data.forEach((element) => {
            $template += Deezer(element);
          });
        }
        $main.innerHTML = $template;
      },
    });
  } else if (hash === "#/Contacto") {
    $main.appendChild(ContactForm());
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        // console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}
