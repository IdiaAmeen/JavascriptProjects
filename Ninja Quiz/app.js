const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");
const results = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //show results on page//
  results.querySelector("span").textContent = `${score}%`;
  results.classList.remove("d-none");
});
