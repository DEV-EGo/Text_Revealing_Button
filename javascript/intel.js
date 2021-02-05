const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
let shown = true;

function toggleText() {
  if (shown) {
    btn.innerText = "show text";
    text.style.opacity = 0;
  } else {
    btn.innerText = "hide text";
    text.style.opacity = 1;
  }
  shown = !shown;
}
btn.addEventListener("click", () => {
  toggleText();
});
