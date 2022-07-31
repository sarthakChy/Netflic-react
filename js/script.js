let langHover = document.querySelector(".drop-button");
let langItem = document.querySelector(".other-lang");
console.log(langHover);
console.log(langItem);


langHover.addEventListener('click',showLang);

function showLang(){
  langItem.classList.toggle("show");
  console.log(langItem.classList);
}
