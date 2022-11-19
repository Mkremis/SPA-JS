export async function ajax(props) {
  let { url, prop, cbSuccess } = props;
  if (!prop) prop = null;
  await fetch(url, prop)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "ocurrio un error";
      document.getElementById("main").innerHTML = `
      <div class ="error">
      <p>error ${err.status} : ${message}</p>
      </div>`;
      document.querySelector(".loader").style.display = "none";
    });
}
