function rollDice(){
    var num1 = Math.floor(Math.random()*6 + 1);
      var num2 = Math.floor(Math.random()*6 + 1);
      document.querySelector(".img1").setAttribute("src", "images/dice"+ num1 + ".png");
      document.querySelector(".img2").setAttribute("src", "images/dice"+ num2 + ".png");
      if(num1 === num2){
        document.getElementsByTagName("h1")[0].innerText = "Draw!";
      }else if(num1 > num2){
        document.getElementsByTagName("h1")[0].innerText = " 🚩Player 1 Wins!";
      }else{
        document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins! 🚩";
      }
  }