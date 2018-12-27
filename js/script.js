 var popup = document.querySelector(".js-pop-up-feedback");
 var form = popup.querySelector("form");
 var email = popup.querySelector("[name=email]");
 var client = popup.querySelector("[name=client]");
 document.querySelector(".js-popup-close").addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("active");
 })
 document.querySelector(".js-feedback-button").addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("active");
   popup.classList.remove("pop-up-error");
   form.querySelector("input[type='text']:first-of-type").focus();
 })
 form.addEventListener("submit", function (evt) {
   if (!email.value || !client.value) {
     evt.preventDefault();
     popup.classList.remove("pop-up-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("pop-up-error");
   }
 });
 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (popup.classList.contains("active")) {
       popup.classList.remove("active");
     }
   }
 });
