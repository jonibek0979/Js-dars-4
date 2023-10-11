var elTitle = document.querySelector('.title');
var elInp = document.querySelector('.inp');

function btn() {
  if (elInp.value.length >= 8 && elInp.value != elInp.value.toLowerCase()) {
    elTitle.textContent = "Yaroqli parol";

  } else {
    elTitle.textContent = "Yaroqsiz parol";

  }
}
