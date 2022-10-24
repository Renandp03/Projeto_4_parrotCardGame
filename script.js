let jogadas = 0
let primeiraCarta = ""
let segundaCarta = "" 
let primeiraCartaNome = ""
let segundaCartaNome = ""

let numeroDeCartas = Number(prompt("Bem vindo, Quantas cartas você quer?"));

const imagens = [
  "naruto.png",
  "goku.png",
  "tanjiro.png",
  "itadori.png",
  "megumi.webp",
  "sasuke.png",
  "giyu.png"
];

const mesa = document.querySelector(".mesa");
let tempo = 60

function passaTempo(){
  relogio = document.querySelector(".tempo")
  tempo--
  relogio.innerHTML = tempo
  console.log(tempo)
  if(tempo <= 0 ){
    clearInterval(meuInterval)
    alert("O tempo acabou. Game Over.")
    let jogarNovamente = prompt("Deseja jogar de novo?")
    if(jogarNovamente == "sim"){
      jogadas = 0
      tempo = 60
      mesa.innerText = ''
      numeroDeCartas = Number(prompt("Bem vindo, Quantas cartas você quer?"))
      embaralhaCartas()
      meuInterval = setInterval(passaTempo,1000)}
    else{
      alert("Ok. Obrigado por joga.")
      mesa.innerHTML = ""
  }
  }
}


function embaralhaCartas(){
while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 != 0) {
  alert("escolha um numero par de cartas entre 4 e 14");
  numeroDeCartas = Number(prompt("escolha o numero de cartas"));
}




let numeroDePares = numeroDeCartas / 2;
let baralho = [];

for (let i = 0; i < numeroDePares; i++) {
  for (let j = 0; j < 2; j++) {
    baralho.push(
      '<div onclick="viraCarta(this)" class="carta" data-nome="'+imagens[i]+'"><div class="front face"><img src="imagens/' +
        imagens[i] +
        '" alt=""></div><div class="back face"><img class="piriquito" src="imagens/front 1.png" alt="piriquito"></div></div>'
    );
  }
}

baralho = baralho.sort(() => Math.random() - 0.5);

for (let contador = 0; contador < baralho.length; contador++) {
  mesa.innerHTML += baralho[contador];
}

}

embaralhaCartas()

let meuInterval = setInterval(passaTempo,1000)

function desviraCartas(){
  primeiraCarta.classList.remove("virada");
  primeiraCarta.classList.remove("primeira");
  segundaCarta.classList.remove("virada");
  segundaCarta.classList.remove("segunda");
  primeiraCarta = "";
  segundaCarta = "";
  
}


function comparaCartas(){
   primeiraCartaNome = primeiraCarta.getAttribute("data-nome")
   segundaCartaNome = segundaCarta.getAttribute("data-nome")


  console.log(primeiraCartaNome)
  console.log(segundaCartaNome)

  if(primeiraCartaNome != segundaCartaNome){
    setTimeout(desviraCartas,1000);
    
  }

  else{
  primeiraCarta.classList.remove("primeira");
  segundaCarta.classList.remove("segunda");
  primeiraCarta=""
  segundaCarta=""  
}
  
}




function fimDeJogo(){
  let cartasReveladas = document.getElementsByClassName("virada")
  console.log(cartasReveladas)
  if(cartasReveladas.length == numeroDeCartas){
    clearInterval(meuInterval)
    alert("Você ganhou em " + jogadas + " jogadas e " + (60 - Number(tempo)) + " segundos!")
    let jogarNovamente = prompt("Deseja jogar de novo?")
    if(jogarNovamente == "sim"){
      jogadas = 0
      tempo = 60
      mesa.innerText = ''
      numeroDeCartas = Number(prompt("Bem vindo, Quantas cartas você quer?"))
      embaralhaCartas()
      meuInterval = setInterval(passaTempo,1000)
  }
  else{
    alert("Ok. Obrigado por joga.")
    mesa.innerHTML = ""
  }
  
}
}

function viraCarta(item) {
  let carta = item;
  if(primeiraCarta == ""){
  carta.classList.add("virada");
  carta.classList.add("primeira")
  primeiraCarta = carta
  jogadas++
  
  }
  
  else if(segundaCarta == ""){
    carta.classList.add("virada")
    carta.classList.add("segunda")
    segundaCarta = carta
    jogadas++
    
    comparaCartas()
    setTimeout(fimDeJogo, 2000);
  }
}










