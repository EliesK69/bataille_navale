//attraper les éléments
const

// Déclaration des variables
const tabJoueur = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
const tabOrdi = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

const elementsDeplacables = document.querySelectorAll(".drag");
const ouDropper = document.querySelectorAll(".ouDropper");

let elementDeplace = null;
let positionBateauxJoueurs = [];

elementsDeplacables.forEach(function(element) {
  element.addEventListener('dragstart', function(event) {
    elementDeplace = event.target;
    event.dataTransfer.setData('youpi', event.target.id);
  });
});

ouDropper.forEach(function(dropZone) {
  dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  dropZone.addEventListener('drop', function(event) {
    if (elementDeplace !== null) {
      let elementDestination = event.target;
      
      positionBateauxJoueurs.push(elementDestination.id) 
      console.log(positionBateauxJoueurs) 

      while (!elementDestination.classList.contains("ouDropper")) {
        elementDestination = elementDestination.parentNode;
      }
      elementDestination.appendChild(elementDeplace);
      elementDeplace = null;
    }
  });
});

function setJoueur(){
    if
}

function setOrdi(){
    let ordiLocation = tabOrdi[Math.floor(tabOrdi.length * Math.random)][Math.floor(tabOrdi.length * Math.random)];
}
Math.random