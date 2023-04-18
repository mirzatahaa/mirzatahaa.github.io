"use strict";

// Fonction pour afficher les détails d'un onglet spécifique
function showDetails(tabId) {
  // Cacher tous les détails
  var details = document.getElementsByClassName("details");
  for (var i = 0; i < details.length; i++) {
    details[i].style.display = "none";
  }

  // Afficher les détails de l'onglet sélectionné
  var selectedTab = document.getElementById(tabId);
  var selectedDetails = document.getElementById(tabId + "-details");
  selectedTab.classList.add("active");
  selectedDetails.style.display = "block";
}

// Écouteurs d'événements pour les clics sur les onglets
document.getElementById("skills-tab").addEventListener("click", function () {
  showDetails("skills");
});
document
  .getElementById("experiences-tab")
  .addEventListener("click", function () {
    showDetails("experiences");
  });
document
  .getElementById("formations-tab")
  .addEventListener("click", function () {
    showDetails("formations");
  });
