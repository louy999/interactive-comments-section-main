async function fetchApp() {
  let res = await fetch("../data.json");
  let data = await res.json();
  // console.log(data.currentUser.username);
  for (let i = 0; i < data.comments.length; i++) {
    let replies = data.comments[i].replies;
    let commentIdReplay = data.comments[i].id;
    let commentDiv = document.querySelector(`.comment-${commentIdReplay}`);
    let replayDiv = document.createElement("div");
    commentDiv?.insertAdjacentElement("afterend", replayDiv);
    if (replies.length !== 0) {
      replies.forEach((repl: any) => {
        let score = repl.score < 10 ? `0${repl.score}` : `${repl.score}`;
        replayDiv.classList.add(`replay-div`);
        if (repl.user.username === data.currentUser.username) {
          replayDiv.innerHTML += `
        <div id="replay" class="replay-${repl.id} rep-${repl.id}">
            <div class="like">
              <i id="${repl.id}" class="fa-solid fa-plus plus"></i>
              <span class="num${repl.id}">${score}</span>
              <i id="${repl.id}" class="fa-solid fa-minus minus"></i>
            </div>
             <div class="content">
                <div class="info">
                  <img src="${repl.user.image.png}"/>
                  <span class="name">${repl.user.username}</span>
                  <span class="you">you</span>
                  <span class="last">${repl.createdAt}</span>
                </div>
                <p><span class="rep-to">@${repl.replyingTo}</span> ${repl.content}</p>
              </div>
              <div class="del-ed">
                <span id="${repl.id}" class="delete"> <i class="fa-solid fa-trash"></i>  delete</span>
                <span id="${repl.id}" class="edit"><i class="fa-sharp fa-solid fa-pen"></i>  edit</span>
              </div>
              </div>
          `;
        } else {
          replayDiv.innerHTML = `
        <div id="replay" class="replay-${repl.id} rep-${repl.id}">
          <div class="like">
            <i id="${repl.id}" class="fa-solid fa-plus plus"></i>
            <span class="num${repl.id}">${score}</span>
            <i id="${repl.id}" class="fa-solid fa-minus minus"></i>
          </div>
          <div class="content">
            <div class="info">
              <img src="${repl.user.image.png}" />
              <span class="name">${repl.user.username}</span>
              <span class="last">${repl.createdAt}</span>
            </div>
            <p>
              <span class="rep-to">@${repl.replyingTo}</span> ${repl.content}
            </p>
          </div>
          <div id="${repl.id}" class="reply">
            <i class="fa-solid fa-reply"></i>
            <span>reply</span>
          </div>
        </div>
        `;
        }
      });
    }
  }
}
fetchApp();
