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
  scrollTo(0, 0);

  results.classList.remove("d-none");

  // let i = 0;
  // const timer = setInterval(() => {
  //   console.log("hello");
  //   i++;
  //   if (i === 5) {
  //     clearInterval(timer);
  //   }
  // }, 1000);
  let output = 0;
  const timer = setInterval(() => {
    results.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
