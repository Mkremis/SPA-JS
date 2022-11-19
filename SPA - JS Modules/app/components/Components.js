export class Components {
  constructor(options) {
    this.img = options.img;
    this.title = options.title;
    this.date = options.dateFormat;
    this.slug = options.slug;
    this.id = options.id;
    this.artist = options.artist || null;
    this.album_cover = options.album_cover || null;
    this.preview = options.preview || null;
    this.song = options.title_short || null;
    this.track_link = options.track_link || null;
    this.duration = options.duration || null;
  }
  CardMaker() {
    return `
      <article class="post-card">
        <img src="${this.img}" alt="${this.title}">
          <h2>${this.title}</h2>
          <p>
          <time datetime="${this.date}">${this.date}</time>
          <a href="#/${this.slug}" data-id="${this.id}">Ver publicacion</a>
        </p>
        </article>
        `;
  }
  HitCard() {
    return `<article class="post-card"><a href=${this.slug} target ="_blank"><figure><img src="${this.img}" alt ="${this.title}"><figcaption>${this.title}</figcaption></a><p><time datetime="${this.date}">${this.date}</time></p></article>`;
  }

  DeezerCard() {
    return `<article class="deezer-card">
    <section class="deezer-card__artist">
    <div class="deezer-card__artist-img">
    <figure><a href=${this.slug} target="_blank"><img src="${this.img}" alt="${this.artist}" /><figcaption>${this.artist}</a><figcaption></figure>
    </div>
    <div class="deezer-card__artist-description">
    <div><h4>Album:</h4><p>${this.title}</p></div>
    <div><h4>Track:</h4><a href=${this.track_link} target="_blank"><p>${this.song}</p></a></div>
    <div><h4>Duracion:</h4><p>${this.duration}s</p></div>
    </div>
    </section>
    <section class="deezer-card__album" onmouseenter="ShowButton(this)" onmouseleave="ShowButton(this)">
    <img class="deezer-card__album-cover" src="${this.album_cover}" alt="${this.title}"/>
    <div class="deezer-card__album-button --hidden">
     <button class="deezer-card__album--play" data-source = "${this.preview}"></button>
     <button class="deezer-card__album--pause --hidden" data-source = "${this.preview}"></button>
     </div>
     <img class="deezer-card__album--playing --hidden" src="./app/assets/audio-wave.gif" alt="Playing Music"/>
    </section>
    </article>`;
  }
}
// <iframe class ="preview" src="${this.preview}" frameborder="0"></iframe>
