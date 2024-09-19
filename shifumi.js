const button = document.querySelectorAll("button");
//selection tout les élement boutton et les stock dans une variable bouton

for (let i = 0; i < button.length; i++) {
  //parcours la liste des boutton
  //ajout d'évenement quand on click sur un bouton
  button[i].addEventListener("click", () => {
    //création d'une variable contenant le contenue du boutton cliqué par le joueur
    const joueur = button[i].innerHTML;

    //création d'une variable robot qui choisira aléatoirement un des bouttons
    const robot = button[Math.floor(Math.random() * button.length)].innerHTML;

    let result = "";

    //conditions d'égalité, victoire et défaites
    if (joueur === robot) {
      result = "Égalité";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Pierre")
    ) {
      result = "Gagné";
    } else {
      result = "Perdu";
    }
    //mise a jour du contenue HTML de l'element de la classe .resultat
    document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${result}
  `;
  });
}
