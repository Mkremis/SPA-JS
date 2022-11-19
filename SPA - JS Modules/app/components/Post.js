export function Post(props) {
  let { content, date, title } = props,
    dateFormated = new Date(date).toLocaleDateString();
  return `
  <section class="post-page">
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="2022-09-15">${dateFormated}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
  </section>
  `;
}
