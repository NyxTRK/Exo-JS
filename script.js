// let nomServeur = "Appache HTTP Server"
// let Version = 2.4
// let portHTTP = 80
// let portHTTPS = 443
// let sslActif = true
// let memoire = 8.5

// console.log("nom du serveur : " + nomServeur)
// console.log("Version : " + Version)
// console.log("PortHTTP : " + portHTTP)
// console.log("PortHTTPS : " + portHTTPS)
// console.log("sslActif : " + sslActif)
// console.log("Taille : " + memoire)

// let motDePasse = "Cyber2026!"
// let longueur = motDePasse.length

// if (longueur < 6) {
//     console.log("Sécurité : FAIBLE");
// }else if (longueur <10) {
//     console.log("sécurité : MOYENNE");
// } else {
//     console.log("sécurité : FORTE");
// } 
// if (longueur >= 12) {
//     console.log("TROP FORT");
// }

// console.log(longueur)

// let Vitesse = "10000"

// if (Vitesse < 10) {
//     console.log("Connexion LENTE - Vérifier les câbles");
// }else if (Vitesse < 100) {
//     console.log("Connexion CORRECTE - Débit standard");
// } else if (Vitesse < 1000) {
//     console.log("Connexion RAPIDE - Bon débit");
// } 
// else if (Vitesse >= 1000) {
//     console.log("Connexion TRES RAPIDE - Fibre optique");
// }
// if (Vitesse === 0) { 
//     console.log("PAS DE CONNEXION - Vérifier le routeur");
// }

// let ports = [20,43,80,443, 543, 536]

// for (let i = 0; i < ports.length; i++)  {
//     console.log("Port disponible : " + ports[i]);
// }

// let serveurs = ["192.168.1.1", "8.8.8.8", "1.1.1.1", "208.67.222.222", "10.0.0.1"] 
// let totalServeurs = 0
// for (let i = 0; i < serveurs.length; i++) {
//     console.log("Ping vers : " + serveurs[i]);
//     console.log("Temps de réponse " + i*15 + "ms");
//     totalServeurs++
// console.log("Nombre de serveurs testés : " + totalServeurs);    
// }

// Cours n°2
// const mainTitle = document.getElementById("main-title")
// console.log(mainTitle)

// const textes = document.getElementsByClassName("texte")
// console.log(textes)

// const allLi = document.querySelectorAll("li")
// console.log(allLi)


// const btnClick = document.querySelector("#btnClick")
// const intputTxt = document.querySelector("#inputTxt")
// const resultat = document.querySelector("#resultat")

// btnClick.addEventListener("click", () => {
//     console.log("Bouton cliqué !")
// })

// intputTxt.addEventListener("input", (e) => {
//     resultat.textContent = e.target.value
// })

// btnClick.addEventListener("mouseenter", () => {
//     btnClick.style.backgroundColor = "#01ffff"
// })

// btnClick.addEventListener("mouseleave", () => {
//     btnClick.style.backgroundColor = "#fff"
// })

// const titre = document.querySelector("#title")
// const zone = document.querySelector("#zone")
// const btnAjouter = document.querySelector("#add")
// const btnSupprimer = document.querySelector('#delete')

// titre.textContent = "Nouveau titre !"
// zone.innerHTML =


// `<ul>
//     <li>Premier element</li>
//     <li>Deuxième element</li>
//     <li>Troisième element</li>
// </ul>`


// btnAjouter.addEventListener("click", () => {
//     const p = document.createElement("p")
//     p.textContent = "Nouveau paragraphe"
//     zone.appendChild(p)
// })

// btnSupprimer.addEventListener("click", () => {
//     const paragraphes = zone.querySelectorAll("p")
//     if (paragraphes.length > 0) {
//         paragraphes[paragraphes.length -1].remove()
//     }
// })

