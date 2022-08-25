let NumContainer = document.querySelector('.btn');
let numSelect = document.querySelector('.resultNum');
let subBtn = document.querySelector('.btnSubmit');
let cardContainer = document.querySelector('.conteiner');
let cardTranks = document.querySelector('.conteinerThank');

// mostra qual btn foi escolhido
NumContainer.addEventListener('click', (event) => {
  let selectNum = event.target.innerText;
  numSelect.innerText = selectNum;
});

// altera o cards para cardTranks
subBtn.addEventListener('click', () => {
  cardContainer.style.display = 'none';
  cardTranks.style.display = 'flex';
});
