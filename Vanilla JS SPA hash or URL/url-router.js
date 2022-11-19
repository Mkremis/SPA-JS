const urlPageTitle = "JS SPA Routing";

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("#url-router nav a")) return;
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: {
    template: "/templates/404.html",
    title: `404 | ${urlPageTitle}`,
    description: "Page not found",
  },
  "/": {
    template: "/templates/index.html",
    title: `Home | ${urlPageTitle}`,
    description: "This is the homepage",
  },
  "/about": {
    template: "/templates/about.html",
    title: `About | ${urlPageTitle}`,
    description: "This is the about us page",
  },
  "/contact": {
    template: "/templates/contact.html",
    title: `Contact | ${urlPageTitle}`,
    description: "This is the contact us page",
  },
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlHandler();
};

const urlHandler = async () => {
  let {
    location: { pathname },
  } = window;
  if (pathname.length === 0 || pathname === "/index.html") {
    pathname = "/";
  }
  const route = urlRoutes[pathname] || urlRoutes[404];
  const html = await fetch(route.template).then((res) => res.text());
  document.getElementById("url-content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", route.description);
};

window.addEventListener("popstate", (e) => urlHandler());

window.route = urlRoute;

urlHandler();
