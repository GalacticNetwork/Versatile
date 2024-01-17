const form = document.querySelector("form");
const input = document.querySelector("input");
const mainframe = document.getElementById("mainframe");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("/sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = "https://duckduckgo.com/?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;
      sessionStorage.setItem("url", __uv$config.encodeUrl(url));
      console.log(sessionStorage.getItem("url"));
      window.location = window.location.protocol + "//" + window.location.host + __uv$config.prefix + sessionStorage.getItem("url")
    });
});
function isUrl(val = ''){
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};
