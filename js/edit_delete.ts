//delete
window.addEventListener("load", () => {
  let deleteIcon = document.querySelectorAll(".delete");
  let confirm: any = document.querySelector(".confirme-delete");
  deleteIcon.forEach((del: any) => {
    del.addEventListener("click", () => {
      confirm.style.top = window.scrollY + "px";
      window.onscroll = () => {
        confirm.style.top = window.scrollY + "px";
      };
      confirm.style.display = "flex";
    });
    document.body.addEventListener("click", (e: any) => {
      if (e.target.classList[0] === "yas") {
        del.parentElement.parentElement.remove();
        confirm.style.display = "none";
      }
      if (e.target.classList[0] === "no") {
        confirm.style.display = "none";
      }
    });
  });
});

// edit
window.addEventListener("load", () => {
  let editIcon = document.querySelectorAll(".edit");
  editIcon.forEach((ed: any) => {
    ed.addEventListener("click", () => {
      let grand = ed.parentElement.parentElement;
      let content = ed.parentElement.parentElement.children[1].children[1];
      let parent = ed.parentElement.parentElement.children[1];
      let textEdit = document.createElement("textarea");
      let btnUp = document.createElement("input");
      btnUp.type = "button";
      btnUp.value = "update";
      btnUp.classList.add("btn-update");
      textEdit.value = content.textContent;
      textEdit.classList.add("edit-text");
      console.log(parent);
      parent.appendChild(textEdit);
      content.style.display = "none";
      grand.appendChild(btnUp);

      let btnEd = document.querySelectorAll(".btn-update");
      btnEd.forEach((btn) => {
        btn.addEventListener("click", () => {
          content.innerHTML = textEdit.value;
          textEdit.style.display = "none";
          content.style.display = "block";
          btnUp.style.display = "none";
        });
      });
    });
  });
});
