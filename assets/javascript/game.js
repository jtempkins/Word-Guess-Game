var animals = ["rhinoceros", "pangolin", "wildebeest", "ostrich", "tapir", "salamander", "platypus", "wombat", "blue dragon", "mantis shrimp"];

var randomAnimal = "";
var wordLetters = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var guessRemaining = 9;

//Start Function

function Game() {
    randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    //splits the individual animal away from the array and stores new animal array as letters
    wordLetters = randomAnimal.split("");

    //stores word length in blanks
    blanks = wordLetters.length;

    //loop to generate "_" for every animal array
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

  //   var blanksAndCorrect = [];
  //   for (var i =0 < animal.length; i++) {
  //   blanksAndCorrect[i] = "_";
    // }


    //shows dashes in html
    document.getElementById("currentAnimal").innerHTML = "  " + blanksAndCorrect.join("  ");
}

//Call function
Game();