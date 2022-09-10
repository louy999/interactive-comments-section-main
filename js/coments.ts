let container = document.querySelector("#container") as HTMLDivElement;

async function fetchComments() {
  let res = await fetch("../data.json");
  let data = await res.json();
  console.log(data.comments.length);
  for (let i = 0; i < data.comments.length; i++) {
    //fetch and loop on comment

    //if condition for score
    let score =
      data.comments[i].score < 10
        ? `0${data.comments[i].score}`
        : `${data.comments[i].score}`;
    container.innerHTML += `
        <div id="comment" class="comment-${data.comments[i].id}">
            <div class="like">
                <i class="fa-solid fa-plus plus"></i>
                <span>${score}</span>
               <i class="fa-solid fa-minus minus"></i>
            </div>
            <div class="content">
                <div class="info">
                    <img src="${data.comments[i].user.image.png}"/>
                    <span class="name">${data.comments[i].user.username}</span>
                    <span class="last">${data.comments[i].createdAt}</span>
                </div>
                <p>${data.comments[i].content}</p>
            </div>
            <div class="reply">
                <i class="fa-solid fa-reply"></i>
                <span>reply</span>
            </div>
        </div>
    `;

    //for loop in replays
    console.log(data.comments[i].replies);
  }
}
fetchComments();
