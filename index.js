document.querySelector("button").addEventListener("click", diceRoll);


function diceRoll() {
  var randomNo= Math.floor(Math.random() * 6) + 1 ;
  var randomImage= "dice" + randomNo + ".png";
  var randomImageSource= document.querySelectorAll("img") [0];
  randomImageSource.setAttribute("src", randomImage);

  var randomNo1= Math.floor(Math.random() * 6) + 1 ;
  var randomImage1= "dice" + randomNo1 + ".png";
  var randomImageSource1= document.querySelectorAll("img") [1];
  randomImageSource1.setAttribute("src", randomImage1);

  if (randomNo > randomNo1) {
    document.querySelector("h1").innerHTML= "You won!🥳";
  } else if (randomNo < randomNo1) {
    document.querySelector("h1").innerHTML= "Oops, the computer won!☹️";
  } else {
    document.querySelector("h1").innerHTML= "It's a draw! Try again.😊";
  }

}
