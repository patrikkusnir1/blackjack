let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 6; //23

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got blackjack! 🥳")
} else {
  console.log("You're out of the game 😥");
}
