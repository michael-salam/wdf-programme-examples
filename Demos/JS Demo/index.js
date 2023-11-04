const button = document.querySelector("button");

button.addEventListener("click", changeContent);
function changeContent() {
  document.querySelector("h1").textContent = "Modified content";
}
function addClassName() {
  document.querySelector("h1").classList.add("newClass");
}
function changeStyle() {
  document.querySelector("h1").style.color = "green";
}
function hideElement() {
  document.querySelector("h1").style.display = "none";
}
