const faqBtns = document.querySelectorAll(".faq button");
faqBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } else {
      faqBtns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
      console.log(btn.classList);
    }
  })
);
