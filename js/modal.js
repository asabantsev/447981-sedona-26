document.addEventListener('DOMContentLoaded',function() {
  var link = document.querySelector(".button-popup");
  var popup = document.querySelector(".index-form");
  var close = popup.querySelector(".button-search");
  var form = popup.querySelector("form");
  var arrival = popup.querySelector("[name=arrival-date]");
  var departure = popup.querySelector("[name=departure-date]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("appear");
    arrival.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести даты заезда и выезда");
    } else {
     form.submit();
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("appear")) {
        popup.classList.remove("appear");
        popup.classList.remove("modal-error");
      }
    }
  });
});
