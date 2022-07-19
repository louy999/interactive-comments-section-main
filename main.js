//function for read json file
async function fectchDatajson() {
  let dataJson = await fetch("./data.json");
  let data = await dataJson.json();
  console.log(data.comments[1].replies[0]);
  //   function vote to post

  function Vote() {
    let pls = document.querySelectorAll(".pls");
    let min = document.querySelectorAll(".min");
    // add one vote
    document.addEventListener("click", (e) => {
      console.log();
      if (e.target.classList == "pls") {
        e.target.parentElement.children[1].innerHTML++;
      }
      if (e.target.classList == "min") {
        if (e.target.parentElement.children[1].innerHTML == 0) {
        } else {
          e.target.parentElement.children[1].innerHTML--;
        }
      }
    });
  }
  Vote();

  //functon for get score all comment
  function getScore() {
    //get score amy
    let numberAmy = document.querySelector(".con-amy .num");
    numberAmy.innerHTML = data.comments[0].score;
    //get score max
    let numberMax = document.querySelector(".con-max .num");
    numberMax.innerHTML = data.comments[1].score;
    //get score ram
    let numberRam = document.querySelector(".con-ram .num");
    numberRam.innerHTML = data.comments[1].replies[0].score;
    //get score juli
    let numberJuli = document.querySelector(".con-juli .num");
    numberJuli.innerHTML = data.comments[1].replies[1].score;
  }
  getScore();

  //function get name all comment
  function getNameAndLastActiveAndImg() {
    //get name amy
    let nameAmy = document.querySelector(".con-amy .name-avatar");
    nameAmy.innerHTML = data.comments[0].user.username;
    //last active amy
    let lastActiveAmy = document.querySelector(".con-amy .last-active");
    lastActiveAmy.innerHTML = data.comments[0].createdAt;
    //get img avatar amy
    let imgAmy = document.querySelector(".con-amy .title .img-avatar");
    imgAmy.src = data.comments[0].user.image.png;

    //get name max
    let nameMax = document.querySelector(".con-max .name-avatar");
    nameMax.innerHTML = data.comments[1].user.username;
    //last active max
    let lastActiveMax = document.querySelector(".con-max .last-active");
    lastActiveMax.innerHTML = data.comments[1].createdAt;
    //get img avatar max
    let imgMax = document.querySelector(".con-max .title .img-avatar");
    imgMax.src = data.comments[1].user.image.png;

    //get name ram
    let nameRam = document.querySelector(".con-ram .name-avatar");
    nameRam.innerHTML = data.comments[1].replies[0].user.username;
    //last active ram
    let lastActiveRam = document.querySelector(".con-ram .last-active");
    lastActiveRam.innerHTML = data.comments[1].replies[0].createdAt;
    //get img avatar ram
    let imgRam = document.querySelector(".con-ram .title .img-avatar");
    imgRam.src = data.comments[1].replies[0].user.image.png;

    //get name juli
    let nameJuli = document.querySelector(".con-juli .name-avatar");
    nameJuli.innerHTML = data.comments[1].replies[1].user.username;
    //last active juli
    let lastActiveJuli = document.querySelector(".con-juli .last-active");
    lastActiveJuli.innerHTML = data.comments[1].replies[1].createdAt;
    //get img avatar juli
    let imgJuli = document.querySelector(".con-juli .title .img-avatar");
    imgJuli.src = data.comments[1].replies[1].user.image.png;
    //get img avatar juli in chat
    let chatImg = document.querySelector(".chat img");
    chatImg.src = data.comments[1].replies[1].user.image.png;
  }
  getNameAndLastActiveAndImg();

  //function for get paragraph avatar or commint
  function getCommint() {
    //commint amy
    let commintAmy = document.querySelector(".con-amy .para");
    commintAmy.innerHTML = data.comments[0].content;
    //commint max
    let commintMax = document.querySelector(".con-max .para");
    commintMax.innerHTML = data.comments[1].content;
    //commint ram
    let commintRam = document.querySelector(".con-ram .para");
    commintRam.innerHTML = data.comments[1].replies[0].content;
    //commint juli
    let commintJuli = document.querySelector(".con-juli .para");
    commintJuli.innerHTML = `${data.comments[1].replies[1].content}`;
  }
  getCommint();
  idCo = 4;
  function send() {
    //+1 in id count
    idCo++;
    let send = document.querySelector(".chat input");
    let comment = document.querySelector(".chat textarea");
    let chat = document.querySelector(".chat");
    send.addEventListener("click", () => {
      if (comment.value != "") {
        console.log(comment.value);
        let section = document.createElement("section");
        section.id = idCo;
        section.classList = "par";
        section.classList += " juli";
        section.innerHTML += `<div class="con-juli">
          <div class="like">
            <img src="./images/icon-plus.svg" class="pls" alt="" srcset="" />
            <sapn class="num">0</sapn>
            <img src="./images/icon-minus.svg" class="min" alt="" srcset="" />
          </div>
          <div class="title">
            <div class="i-n-a">
              <img  src="${data.comments[1].replies[1].user.image.png}"class="img-avatar" />
              <span class="name-avatar">${data.comments[1].replies[1].user.username}</span>
              <span class="you">you</span>
              <span class="last-active">${data.comments[1].replies[1].createdAt}</span>
            </div>
            <div class="ed-de">
              <img src="./images/icon-delete.svg" alt="" />
              <span class="del">Delete</span>
              <img src="./images/icon-edit.svg" alt="" />
              <span class="edit">Edit</span>
            </div>
          </div>
          <span class='re'></span>
          <div class="para">${comment.value}</div>
        </div>`;
        chat.insertAdjacentElement("beforebegin", section);
        comment.value = "";
      } else {
      }
    });
  }
  send();

  //funcion for click in delete and edit
  function deleteAndEditAndUpdate() {
    // delete
    document.addEventListener("click", (e) => {
      if (e.target.classList == "del") {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
      }
    });
    // edit
    document.addEventListener("click", (e) => {
      if (e.target.classList == "edit") {
        let para =
          e.target.parentElement.parentElement.parentElement.children[3];
        let creatInp = document.createElement("textarea");
        let creatUpdate = document.createElement("input");
        creatUpdate.type = "button";
        creatUpdate.value = "UPDATE";
        creatUpdate.classList = "update";
        para.style.display = "none";
        creatInp.value = para.innerHTML;
        creatInp.classList = "input-ed";
        e.target.parentElement.parentElement.parentElement.appendChild(
          creatInp
        );
        e.target.parentElement.parentElement.parentElement.appendChild(
          creatUpdate
        );
      }
    });
    //update
    document.addEventListener("click", (e) => {
      if (e.target.classList == "update") {
        e.target.parentElement.children[3].style.display = "block";
        e.target.parentElement.children[3].innerHTML =
          e.target.parentElement.children[4].value;
        e.target.parentElement.children[4].style.display = "none";
        e.target.style.display = "none";
      }
    });
  }
  deleteAndEditAndUpdate();

  //function for add data in json
  function addData() {
    let sections = document.querySelectorAll("section");
    document.querySelector(".send").addEventListener("click", () => {
      console.log(sections);
    });
  }
  addData();
  //function for replay container
  function clickReply() {
    let replay = document.querySelectorAll("div.reply");
    replay.forEach((e) => {
      e.addEventListener("click", () => {
        idCo++;
        let sectionTarget = e.parentElement.parentElement.parentElement;

        divinput = document.createElement("div");
        divinput.innerHTML = `
        <div class="reply-chat">
          <img src="${data.comments[1].replies[1].user.image.png}" alt="" />
          <textarea name=""  value='louy' id="" >${sectionTarget.children[0].children[1].children[0].children[1].innerHTML} </textarea>
          <input type="button" value="Reply" class="Reply" />
        </div>`;
        sectionTarget.insertAdjacentElement("afterend", divinput);
        let button = document.querySelectorAll(".reply-chat input");
        button.forEach((e) => {
          e.addEventListener("click", () => {
            console.log(divinput);
            console.log();
            divinput.innerHTML = `<section id="${idCo}" class="chi juli">
        <div class="con-juli">
          <div class="like">
            <img src="./images/icon-plus.svg" class="pls" alt="" srcset="" />
            <sapn class="num">0</sapn>
            <img src="./images/icon-minus.svg" class="min" alt="" srcset="" />
          </div>
          <div class="title">
            <div class="i-n-a">
              <img class="img-avatar" src='${data.comments[1].replies[1].user.image.png}' />
              <span class="name-avatar">${data.comments[1].replies[1].user.username}</span>
              <span class="you">you</span>
              <span class="last-active">5min</span>
            </div>
            <div class="ed-de">
              <img src="./images/icon-delete.svg" alt="" />
              <span class="del">Delete</span>
              <img src="./images/icon-edit.svg" alt="" />
              <span class="edit">Edit</span>
            </div>
          </div>
          <span class="re"></span>
          <div class="para">${e.parentElement.children[1].value}</div>
        </div>
      </section>`;
          });
        });
      });
    });
  }
  clickReply();
  // function for create post reply
}

fectchDatajson();
