// function for add and munis one to score
window.addEventListener("load", function () {
    var addS = document.querySelectorAll("i.plus");
    var minusS = document.querySelectorAll("i.minus");
    var _loop_1 = function (i) {
        addS[i].addEventListener("click", function () {
            var score = document.querySelector(".like span.num".concat(addS[i].id));
            if ((score === null || score === void 0 ? void 0 : score.classList[1]) !== "add") {
                score.classList.add("add");
                score.classList.remove("minus");
                score.innerHTML++;
                var numScore = score.innerHTML < 10 ? "0".concat(score.innerHTML) : "".concat(score.innerHTML);
                score.innerHTML = numScore;
            }
            else {
                return;
            }
        });
    };
    for (var i = 0; i < addS.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        minusS[i].addEventListener("click", function () {
            var score = document.querySelector(".like span.num".concat(minusS[i].id));
            if ((score === null || score === void 0 ? void 0 : score.classList[1]) !== "minus") {
                score.classList.remove("add");
                score.classList.add("minus");
                score.innerHTML--;
                var numScore = score.innerHTML < 10 ? "0".concat(score.innerHTML) : "".concat(score.innerHTML);
                score.innerHTML = numScore;
            }
            else {
                return;
            }
        });
    };
    for (var i = 0; i < minusS.length; i++) {
        _loop_2(i);
    }
});
