window.addEventListener("load", () => {
  async function app() {
    let res = await fetch("../data.json");
    let data = await res.json();

    let btnsReplay = document.querySelectorAll(".reply");

    btnsReplay.forEach((btn) => {
      btn.addEventListener("click", () => {
        let divRep = document.querySelector(`.rep-${btn.id}`) as HTMLDivElement;
        let chatRep = document.createElement("div");
        chatRep.classList.add("send-my-rep");
        chatRep.classList.add(`reply-${btn.id}`);

        chatRep.innerHTML = ` 
                  <div>
                    <img src="${data.currentUser.image.png}" alt="" />
                    <textarea name="" id="" placeholder="Add a comment..."></textarea>
                    <input type="button" value="reply" />
                    </div>
                    `;
        if (divRep.classList[2] !== "active") {
          divRep?.insertAdjacentElement("afterend", chatRep);
          divRep.classList.add("active");
        } else {
          divRep.classList.remove("active");
          let div = document.querySelector(
            `.reply-${btn.id}`
          ) as HTMLDivElement;
          div.style.display = "none";
        }
      });
    });
  }
  app();
});

let d = new Date();
