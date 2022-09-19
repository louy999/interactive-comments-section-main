let container = document.querySelector("#container") as HTMLDivElement;
let sendPostImg = document.querySelector(
  ".send-my-post img"
) as HTMLImageElement;
async function fetchComments() {
  let res = await fetch("../data.json");
  let data = await res.json();
  sendPostImg.src = data.comments[1].replies[1].user.image.png;
  for (let i = 0; i < data.comments.length; i++) {
    //fetch and loop on comment
    let idCo = data.comments[i].id;

    //if condition for score
    let score =
      data.comments[i].score < 10
        ? `0${data.comments[i].score}`
        : `${data.comments[i].score}`;
    container.innerHTML += `
        <div id="comment" class="comment-${data.comments[i].id} rep-${data.comments[i].id}">
            <div class="like">
                <i id="${idCo}" class="fa-solid fa-plus plus"></i>
                <span class="num${idCo} ">${score}</span>
               <i id="${idCo}" class="fa-solid fa-minus minus"></i>
            </div>
            <div class="content">
                <div class="info">
                    <img src="${data.comments[i].user.image.png}"/>
                    <span class="name">${data.comments[i].user.username}</span>
                    <span class="last">${data.comments[i].createdAt}</span>
                </div>
                <p>${data.comments[i].content}</p>
            </div>
            <div id="${idCo}" class="reply">
                <i class="fa-solid fa-reply"></i>
                <span>reply</span>
            </div>
        </div>
    `;
  }
}
fetchComments();
