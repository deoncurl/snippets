form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  form.reset();
});
