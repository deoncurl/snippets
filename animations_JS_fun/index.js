button = document.querySelector("button");

let activated = false;

button.addEventListener("click", function () {
  let square = document.querySelector(".square");
  square.classList.toggle(activated ? "pause" : "active");
  activated = true;
  button.innerHTML === "start"
    ? (button.innerHTML = "stop")
    : (button.innerHTML = "start");
});
