function showTip() {
  const tips = [
    "Use strong and unique passwords.",
    "Don’t click on suspicious links.",
    "Enable two-factor authentication.",
    "Keep your software up to date."
  ];
  // Math.Random() genera un numero casuale tra 0 e 1 
  // Math.floor() arrotonda per difetto
  let index = Math.floor(Math.random() * tips.length); 
  const tip = tips[index];
  document.getElementById("tip").textContent = tip;
}
