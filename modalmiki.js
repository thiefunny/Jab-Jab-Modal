const buttonJoin = document.querySelector(".join");
const modalEl = document.querySelector(".modal");
const closeEl = document.querySelector(".close");
const allEl = document.querySelector(".all");

function do_modal() {

buttonJoin.onclick = function() {
    modalEl.classList.toggle("none");
}


closeEl.onclick = function() {
    modalEl.classList.toggle("none");
}

closeEl.onmouseover = function() {
    closeEl.style.cursor = "pointer";
}

window.addEventListener("click", function(event) {
    console.log(event.target)
    if (event.target === allEl) {modalEl.classList.toggle("none");}
})


}

do_modal();