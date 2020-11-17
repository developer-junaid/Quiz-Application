export default function swDev() {
  let swDev = `${process.env.PUBLIC_URL}/sw.js`
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swDev)
        .then((reg) => console.log("Registered Service worker: ", reg.scope))
        .catch((err) => console.log("Couldn't register Service worker: ", err))
    })
  }
}
