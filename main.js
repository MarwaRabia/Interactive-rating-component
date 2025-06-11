let btns = document.querySelectorAll(".buttons button");
const submit = document.querySelector(".submit");
const send = document.querySelector(".container");
const rating = document.querySelector(".rating");
let rate = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    console.log(btn.textContent);
    rate = btn.textContent;
  });
});

submit.addEventListener("click", () => {
  send.style.display = "none";
  const text = document.querySelector(".selection p");
  text.textContent = `You selected  ${rate}  out 5`;
  console.log(text.textContent);
  rating.style.display = "block";
});
