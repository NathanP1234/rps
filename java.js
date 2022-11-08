// create an array that lists out all of the options (Rock, Paper, Scissors)
var computerChoices = ["r", "p", "s"];

// creating var to hold # wins, losses, ties. Start at 0
var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 3; i++){
    // randomly chooses a choice from the options array. computer guess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // collect user's response and convert to lowercase
    var userGuess = prompt('Enter r, p, or s to play');
    userGuess = userGuess.toLowerCase();

    // only run game if user choice is valid option
    if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
        alert("The computer chose " + computerGuess)

        // win/lose conditions
        if (
            (userGuess === "r" && computerGuess === "s") ||
            (userGuess === "p" && computerGuess === "r") ||
            (userGuess === "s" && computerGuess === "p")
        ){
            wins++;
            alert("You've won " + wins + " time(s)!");
        } else if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s)!");
        } else {
            losses++;
            alert("You've lost " + losses + " time(s)!");
        }
    } else {
        alert("Please choose 'r', 'p', or 's'")
    }
}

// when the game is over, alert totals to user
// we can use the /n char to make a line break
alert(
    "total wins " +
    wins +
    "\ntotal ties " +
    ties +
    "\ntotal losses " +
    losses
)