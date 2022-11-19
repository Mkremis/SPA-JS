import api from "./wp_api.js";
import { PostCards } from "../components/PostCards.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";

export async function InfiniteScroll() {
  let endPosts;
  window.addEventListener("scroll", async (e) => {
    let query = localStorage.getItem("wpSearch"),
      apiURL,
      Component; //High Order Component

    let { hash } = window.location;
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement; //igual que abajo pero usando desestructuracion del objeto documentElement. documentElement es la forma de acceder a la etiqueta HTML del documento.
    // const scrollTop = document.documentElement.scrollTop, //indica cuanto se aleja el scroll del margin-top del documento
    //   clientHeight = document.documentElement.clientHeight, //indica la altura del viewport visible del cliente
    //   scrollHeight = document.documentElement.scrollHeight; //indica la distancia total de scroll hasta el punto seleccionado del doc.
    // console.log(
    //   `scrollTop: ${scrollTop}, clientHeight: ${clientHeight}, scrollHeight:${scrollHeight}`
    // );
    // console.log(hash);
    console.log(scrollTop + clientHeight + 10, scrollHeight);
    if (scrollTop + clientHeight + 1 >= scrollHeight && !endPosts) {
      api.page++;
      if (!hash || hash === "#/") {
        apiURL = `${api.POSTS}&page=${api.page}`;
        Component = PostCards;
      } else if (hash.includes("#/search")) {
        apiURL = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      document.querySelector(".loader").style.display = "block";
      await ajax({
        url: apiURL,
        cbSuccess: (posts) => {
          if (posts.length === 0) {
            // document
            //   .getElementById("main")
            //   .insertAdjacentHTML("beforeend", "<p>Fin de los resultados</p>");
            document.querySelector(".loader").style.display = "none";
            endPosts = true;
            return endPosts;
          }
          let $template = "";
          posts.forEach((post) => {
            // console.log(post);
            $template += Component(post);
          });
          document
            .getElementById("main")
            .insertAdjacentHTML("beforeend", $template);
          document.querySelector(".loader").style.display = "none";
        },
      });
    } else {
      return false;
    }
  });
}
