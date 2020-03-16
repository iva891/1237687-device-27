var link = document.querySelector(".modal-write");
var popup = document.querySelector(".feedback-form");

var form = popup.querySelector("form");
var close = popup.querySelector(".feedback-form-exit");

var username = popup.querySelector("[name=username]");
var usermail = popup.querySelector("[name=usermail]");
var usermessage = popup.querySelector("[name=usermessage]");




link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();

});

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !usermail.value || !usermessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});