let list = document.querySelector("span.icon");
document.addEventListener("click", function (e) {
  let icon = document.querySelector("span.icon + ul");
  if (e.target == list) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
});
