form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.user.value);
  console.log(e.target.pass.value);
  form.reset();
});
