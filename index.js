function diceGame(){
  var randomNumber1 = Math.random();
  var randomNumber2 = Math.random();
  randomNumber1 *= 6;
  randomNumber2 *= 6;
  randomNumber1 = Math.ceil(randomNumber1);
  randomNumber2 = Math.ceil(randomNumber2);

  document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1>randomNumber2){document.querySelector("h2").innerHTML = "Player 1 wins!";}
  else if(randomNumber1<randomNumber2){document.querySelector("h2").innerHTML = "Player 2 wins!";}
  else{document.querySelector("h2").innerHTML = "Draw!";}
}
