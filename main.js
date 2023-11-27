const btnBurger = document.getElementById("burger");
const nav = document.querySelector("nav");

btnBurger.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  nav.classList.toggle("display");
  btnBurger.classList.toggle("open");
  if (nav.classList.contains("display")) {
    document.body.style.overflow = "hidden";
    document.body.prepend(overlay);
    overlay.addEventListener("click", (e) => {
      nav.classList.remove("display");
      document.body.removeChild(e.target);
      document.body.style.overflow = "visible";
    });
  } else {
    document.body.style.overflow = "visible";

    document.body.removeChild(document.getElementsByClassName("overlay")[0]);
  }
});
