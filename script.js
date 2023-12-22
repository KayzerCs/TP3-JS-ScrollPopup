// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
let popup1 = document.getElementById("imgImprovise");
let popup2 = document.getElementById("popup");
let close = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.height = "70px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 200) {
    popup1.style.transform = "translateX(1px)";
    popup1.style.opacity = 1;
  }

  if (window.scrollY > 1000) {
    popup2.style.transform = "translateX(1px)";
    popup2.style.opacity = 1;
  }
});

close.addEventListener("click", () => {
  popup2.remove();
});
