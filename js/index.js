const heartCountElement = document.getElementById("heart-count");
let heartCount = parseInt(heartCountElement.textContent) || 0;

const heartIcons = document.querySelectorAll(".icon-container .fa-heart");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("liked")) {
      icon.classList.remove("liked");
      heartCount--;
    } else {
      icon.classList.add("liked");
      heartCount++;
    }
    heartCountElement.textContent = heartCount;
  });
});







// Initial coins
let coins = parseInt(document.getElementById("coin-count").textContent) || 100;

// Select all call buttons
const callButtons = document.querySelectorAll(".call-button");

// Call history list
const callHistoryList = document.getElementById("call-history-list");

// Clear history button
const clearButton = document.getElementById("clear-history");

// Handle call button clicks
callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector(".card-title").textContent;
    const serviceNumber = card.querySelector(".card-number").textContent;

    // Check coins
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    document.getElementById("coin-count").textContent = coins;

    // Show alert
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to call history
    const entry = document.createElement("p");
    entry.textContent = `${serviceName} - ${serviceNumber}`;
    callHistoryList.appendChild(entry);
  });
});

// Handle clear history button
clearButton.addEventListener("click", () => {
  callHistoryList.innerHTML = ""; // remove all entries
  alert("Call history cleared!");
});
