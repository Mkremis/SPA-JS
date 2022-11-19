const NAME = "rollingstone",
  DOMAIN = `https://es.${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 9, //cantidad de posts que traera por pagina
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`,
  GENIUSAPI = `https://genius.p.rapidapi.com/search?q=`,
  DEEZER = `https://deezerdevs-deezer.p.rapidapi.com/search?q=`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  page,
  GENIUSAPI,
  DEEZER,
};
