const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  // Check if any rating button is selected
  const selectedRating = Array.from(ratings).find((rating) => rating.classList.contains("selected"));

  if (selectedRating) {
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");

    // Set the actual rating
    actualRating.innerHTML = selectedRating.innerHTML;
  } else {
    alert("Please select a rating before submitting.");
  }
});

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block";
  thanksContainer.classList.add("hidden");

  // Remove the "selected" class from all rating buttons
  ratings.forEach((btn) => btn.classList.remove("selected"));
});

// Add click event listeners to rating buttons
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    // Remove "selected" class from all ratings
    ratings.forEach((btn) => btn.classList.remove("selected"));

    // Add "selected" class to the clicked rating button
    rating.classList.add("selected");
  });
});
