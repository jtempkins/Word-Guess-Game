var animals = ["rhinoceros", "pangolin", "wildebeest", "ostrich", "tapir", "salamander", "platypus", "wombat", "blue dragon", "mantis shrimp"];

var randomAnimal = "";
var wordLetters = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var guessesRemaining = 9;
var userGuess = "";
var userGuessed = [];
var answerArray = [];
var currentAnimal = "";
var remainingLetters = "";


//Start Function

function Game() {
    randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log (randomAnimal)

  //splits the individual animal away from the array and stores new animal array as letters
    wordLetters = randomAnimal.split("");

  //stores word length in blanks
    blanks = wordLetters.length;

  //loop to generate "_" for every animal array
    for (var i = 0; i < blanks.length; i++) {
        blanksAndCorrect.push("_");
    if (userGuess == i); 
    }


  //shows dashes in html
    document.getElementById("currentAnimal").innerHTML = "  " + blanksAndCorrect.join("  ");   //There is no id in index or this by the name of currentAnimal
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
  }

//detects key press and released
  document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();
//checking to see if letter selected matches randomAnimal selected
// function checkLetters(letters) {
//     var wordLetters = false;

// }

if (userGuess.length !==1) {
    alert("Enter a single letter.");
  } else 
  for (var j = 0; j <wordLetters.length; j++); {
    if (wordLetters[j] == userGuess); {
      (answerArray[j] ==  userGuess); (remainingLetters--);  
console.log (wordLetters)
    }
  }
}

//         userGuessed.push(userGuess);
//         blanksAndCorrect.push (userGuessed)
 
//         document.getElementById("userGuessed").innerHTML = (userGuessed);
//         console.log (userGuessed)
//     /*
//   document.querySelector("")
//           }
//       else {
//         wrongGuess.push(userGuess);
// */
// }          
  


//Call Game Function
Game();