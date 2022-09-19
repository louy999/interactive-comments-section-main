//delete
window.addEventListener("load", function () {
    var deleteIcon = document.querySelectorAll(".delete");
    var confirm = document.querySelector(".confirme-delete");
    deleteIcon.forEach(function (del) {
        del.addEventListener("click", function () {
            confirm.style.top = window.scrollY + "px";
            window.onscroll = function () {
                confirm.style.top = window.scrollY + "px";
            };
            confirm.style.display = "flex";
        });
        document.body.addEventListener("click", function (e) {
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
window.addEventListener("load", function () {
    var editIcon = document.querySelectorAll(".edit");
    editIcon.forEach(function (ed) {
        ed.addEventListener("click", function () {
            var grand = ed.parentElement.parentElement;
            var content = ed.parentElement.parentElement.children[1].children[1];
            var parent = ed.parentElement.parentElement.children[1];
            var textEdit = document.createElement("textarea");
            var btnUp = document.createElement("input");
            btnUp.type = "button";
            btnUp.value = "update";
            btnUp.classList.add("btn-update");
            textEdit.value = content.textContent;
            textEdit.classList.add("edit-text");
            console.log(parent);
            parent.appendChild(textEdit);
            content.style.display = "none";
            grand.appendChild(btnUp);
            var btnEd = document.querySelectorAll(".btn-update");
            btnEd.forEach(function (btn) {
                btn.addEventListener("click", function () {
                    content.innerHTML = textEdit.value;
                    textEdit.style.display = "none";
                    content.style.display = "block";
                    btnUp.style.display = "none";
                });
            });
        });
    });
});
