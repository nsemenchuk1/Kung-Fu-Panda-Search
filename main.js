// KF Panda Search

// Characcter Theme

// Button Event Listener
document.getElementById("theme-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;
  name = name.toLowerCase();

  //   If statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis" || name === "master mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey" || name === "master monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "We should hangout!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper" || name === "master viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane" || name === "master crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss wolf" || name === "wolf boss") {
    document.getElementById("char-name").innerHTML = "Boss Wolf";
    document.getElementById("char-quote").innerHTML = "Chew on that, tubby!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc" || name === "crocodile ") {
    document.getElementById("char-name").innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML =
      "Croc you like a hurricane!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "You must be the Dragon Warrior!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping" || name === "mrping ") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-quote").innerHTML =
      "To make something special, you just have to belive it's special!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML =
      "One often meets his destiny on the road he takes to avoid it.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen" || name === "peacock") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Happiness... must be taken. And I will take mine!";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "Inner peace... Inner peace...";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Even with his por eyesight, he can see the truth. Why is it that you cannot?";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML =
      "It's time to surrender, panda. Kung fu is dead.";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai lung" || name === "not the dragon warrior") {
    document.getElementById("char-name").innerHTML = "Tai Lung";
    document.getElementById("char-quote").innerHTML =
      "So that is his name: Po... Finally, a worthy opponent! Our battle will be legendary!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "- - - - - - -";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

// Color Theme

// Button Event Listener
document.getElementById("color-btn").addEventListener("click", changeTheme);

function changeTheme() {
  // Input
  let color = document.getElementById("color-in").value;
  color = color.toLowerCase();

  //   If statement - Test the Input
  if (color === "dark" || color === "black") {
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("h1").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("char-quote").style.color = "white";
  } else if (color === "light" || color === "white") {
    document.getElementById("body").style.background =
      "rgba(255, 255, 255, 0.7";
    document.getElementById("h1").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("char-quote").style.color = "black";
  } else if (color === "random") {
    let red = Math.random() * 255 + 0;
    let green = Math.random() * 255 + 0;
    let blue = Math.random() * 255 + 0;
    let rgbString = `rgb(${red}, ${green}, ${blue})`;
    console.log(rgbString);
    document.getElementById("HTML").style.background = rgbString;
    document.getElementById("h1");
    document.getElementById("char-name");
    document.getElementById("char-quote");
  }
}
