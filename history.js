//Get the card container element
const cardContainer = document.querySelector(".glowing-cards");
//Get all card elements
const cards = document.querySelectorAll(".glowing-cards .card");

//Set a mousemove event to the card container
cardContainer.addEventListener("mousemove", e => {
  //Loop through each card
  cards.forEach(card => {
    //Get the size and position of each card
    const rect = card.getBoundingClientRect();
    //Set coordinates for the glow effect
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    //Set the CSS properties to the new coordinate values
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});