let cuadrado = document.querySelector("#border-item");
let result = document.querySelector("#result");

document.querySelector("#ejeU-L").addEventListener("input", (e) => {
  cuadrado.style.borderTopLeftRadius = `${e.target.value}px`;

  result.querySelector("span:nth-child(1)").textContent = e.target.value;
});

document.querySelector("#ejeU-R").addEventListener("input", (e) => {
  cuadrado.style.borderTopRightRadius = `${e.target.value}px`;

  result.querySelector("span:nth-child(2)").textContent = e.target.value;
});

document.querySelector("#ejeB-L").addEventListener("input", (e) => {
  cuadrado.style.borderBottomLeftRadius = `${e.target.value}px`;

  result.querySelector("span:nth-child(3)").textContent = e.target.value;
});

document.querySelector("#ejeB-R").addEventListener("input", (e) => {
  cuadrado.style.borderBottomRightRadius = `${e.target.value}px`;

  result.querySelector("span:nth-child(4)").textContent = e.target.value;
});

document.querySelector("#reiniciar").addEventListener("click", () => {
  document
    .querySelectorAll("#controles input[type=range]")
    .forEach((input) => (input.value = "0"));

  cuadrado.style.borderRadius = "0%";
  result.querySelectorAll("span").forEach((span) => (span.textContent = 0));
});

document.querySelector("#copy").addEventListener("click", () => {
  navigator.clipboard.writeText(result.textContent);

  gsap
    .timeline({
      defaults: { ease: "easeInOut", duration: 1.1 },
    })
    .to(".alertCopy", {
      opacity: 1,
      y: -60,
      repeat: 1,
      yoyo: true,
    });
});
