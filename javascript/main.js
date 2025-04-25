function showTip() {
  const tips = [
    "Use strong and unique passwords.",
    "Don’t click on suspicious links.",
    "Enable two-factor authentication.",
    "Keep your software up to date."
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = tip;
}
