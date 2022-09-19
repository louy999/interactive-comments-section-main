// function for add and munis one to score

window.addEventListener("load", () => {
  let addS = document.querySelectorAll("i.plus");
  let minusS = document.querySelectorAll("i.minus");
  for (let i = 0; i < addS.length; i++) {
    addS[i].addEventListener("click", () => {
      const score: any = document.querySelector(
        `.like span.num${addS[i].id}`
      ) as HTMLSpanElement;
      if (score?.classList[1] !== "add") {
        score.classList.add("add");
        score.classList.remove("minus");
        score.innerHTML++;
        let numScore =
          score.innerHTML < 10 ? `0${score.innerHTML}` : `${score.innerHTML}`;
        score.innerHTML = numScore;
      } else {
        return;
      }
    });
  }
  for (let i = 0; i < minusS.length; i++) {
    minusS[i].addEventListener("click", () => {
      const score: any = document.querySelector(
        `.like span.num${minusS[i].id}`
      ) as HTMLSpanElement;
      if (score?.classList[1] !== "minus") {
        score.classList.remove("add");
        score.classList.add("minus");
        score.innerHTML--;
        let numScore =
          score.innerHTML < 10 ? `0${score.innerHTML}` : `${score.innerHTML}`;
        score.innerHTML = numScore;
      } else {
        return;
      }
    });
  }
});
