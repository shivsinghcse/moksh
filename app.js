const countButton = document.querySelector(".btn-count");
const resetButton = document.querySelector(".btn-reset");
const malaCount = document.querySelector(".mala-count"); // session mala
const totaNaamlCount = document.querySelector(".total-count"); // session naam
const totalMala = document.querySelector(".total-mala-count"); // lifetime mala
const totalNaam = document.querySelector(".total-naam-count"); // lifetime naam

// Lifetime counters (never reset unless storage is cleared)
let lifetimeNaam = localStorage.getItem("totalNaam")
  ? JSON.parse(localStorage.getItem("totalNaam"))
  : 0;

let lifetimeMala = localStorage.getItem("totalMala")
  ? JSON.parse(localStorage.getItem("totalMala"))
  : 0;

// Session counters (resettable, but persist across reloads)
let count = localStorage.getItem("sessionNaam")
  ? JSON.parse(localStorage.getItem("sessionNaam"))
  : 0;

let sessionMala = localStorage.getItem("sessionMala")
  ? JSON.parse(localStorage.getItem("sessionMala"))
  : 0;

// Set UI on load
totaNaamlCount.textContent = count;
malaCount.textContent = sessionMala;
totalNaam.textContent = lifetimeNaam;
totalMala.textContent = lifetimeMala;

function totalCount() {
  // session update
  count++;
  localStorage.setItem("sessionNaam", count);
  totaNaamlCount.textContent = count;

  if (count % 108 === 0) {
    sessionMala++;
    localStorage.setItem("sessionMala", sessionMala);
    malaCount.textContent = sessionMala;
  }

  // lifetime update
  lifetimeNaam++;
  localStorage.setItem("totalNaam", lifetimeNaam);
  totalNaam.textContent = lifetimeNaam;

  if (lifetimeNaam % 108 === 0) {
    lifetimeMala++;
    localStorage.setItem("totalMala", lifetimeMala);
    totalMala.textContent = lifetimeMala;
  }
}

function resetCount() {
  // ✅ reset only session values
  count = 0;
  sessionMala = 0;
  localStorage.setItem("sessionNaam", count);
  localStorage.setItem("sessionMala", sessionMala);

  totaNaamlCount.textContent = count;
  malaCount.textContent = sessionMala;
}

countButton.addEventListener("click", totalCount);
resetButton.addEventListener("click", resetCount);
