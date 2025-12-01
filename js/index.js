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







// call button functionality
let coins = parseInt(document.getElementById("coin-count").textContent) || 100;

const callButtons = document.querySelectorAll(".call-button");

const callHistoryList = document.getElementById("call-history-list");

const clearButton = document.getElementById("clear-history");

callButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const serviceName = card.querySelector(".card-title").textContent;
    const serviceNumber = card.querySelector(".card-number").textContent;


    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    document.getElementById("coin-count").textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const entry = document.createElement("p");
    entry.textContent = `${serviceName} - ${serviceNumber} (Time: ${timeString})`;
    callHistoryList.appendChild(entry);
  });
});

// Handle clear history button
clearButton.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
  alert("Call history cleared!");
});






// Copy button functionality

let copyCount = parseInt(document.getElementById("copy-count").textContent) || 0;

const copyButtons = document.querySelectorAll(".copy-card-button");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const hotlineNumber = card.querySelector(".card-number").textContent;

    navigator.clipboard.writeText(hotlineNumber).then(() => {
      copyCount++;
      document.getElementById("copy-count").textContent = copyCount;

      alert(`Copied hotline number: ${hotlineNumber}\nTotal copies: ${copyCount}`);
    }).catch(err => {
      alert("Failed to copy number: " + err);
    });
  });
});
