const form = document.querySelector("form");
const input = document.querySelector("input");

input.addEventListener("keyup", function onEvent(e) {
  if (e.keyCode === 13) {
    event.preventDefault();
    window.navigator.serviceWorker
      .register("/sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = "https://duckduckgo.com/?q=" + url;
        else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "https://" + url;
        sessionStorage.setItem("url", __uv$config.encodeUrl(url));
        console.log(url);
        window.location.href =
          window.location.protocol +
          "//" +
          window.location.host +
          __uv$config.prefix +
          __uv$config.encodeUrl(url);
      });
  }
});

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
