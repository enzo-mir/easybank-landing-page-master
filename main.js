const btnBurger = document.getElementById("burger");
const nav = document.querySelector("nav");

btnBurger.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  nav.classList.toggle("display");
  btnBurger.classList.toggle("open");
  if (nav.classList.contains("display")) {
    document.body.prepend(overlay);
    overlay.addEventListener("click", (e) => {
      nav.classList.remove("display");
      btnBurger.classList.remove("open");
      document.body.removeChild(e.target);
    });

    window.addEventListener("scroll", () => {
      nav.classList.remove("display");
      btnBurger.classList.remove("open");
      document.body.removeChild(document.getElementsByClassName("overlay")[0]);
    });
  } else {
    document.body.removeChild(document.getElementsByClassName("overlay")[0]);
  }
});
