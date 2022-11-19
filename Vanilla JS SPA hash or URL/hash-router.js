const hashPageTitle = "JS SPA Routing";
const hashRoutes = {
  404: {
    template: "/templates/404.html",
    title: `404 | ${hashPageTitle}`,
    description: "Page not found",
  },
  "/": {
    template: "/templates/index.html",
    title: `Home | ${hashPageTitle}`,
    description: "This is the homepage",
  },
  about: {
    template: "/templates/about.html",
    title: `About | ${hashPageTitle}`,
    description: "This is the about us page",
  },
  contact: {
    template: "/templates/contact.html",
    title: `Contact | ${hashPageTitle}`,
    description: "This is the contact us page",
  },
};

const locationHandler = async () => {
  let {
    location: { hash },
  } = window;

  if (hash.length === 0 || hash === "/index.html") {
    hash = "/";
  }
  let hashStr = hash.replace("#", "");

  const route = hashRoutes[hashStr] || hashRoutes[404];
  const html = await fetch(route.template).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", route.description);
};

window.addEventListener("hashchange", locationHandler);
locationHandler();
