const questions = document.querySelectorAll(".question");

questions.forEach((question, index) =>
  question.addEventListener("click", function () {
    const answer = document.querySelector(`#a${index + 1}`);
    answer.classList.toggle("active");
  })
);
