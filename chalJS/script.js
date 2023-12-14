// const nam = "Paul";

// if (nam === "Paul"){
//     console.log("bonjours , Paul");
// } else{
//     console.log("byby");
// }



// function mettreAuCarreEtConcatener(nombre) {
//     // Convertir le nombre en chaîne de caractères
//     const chiffres = nombre.toString().split('');

//     // Mettre au carré chaque chiffre et concaténer les résultats
//     const resultat = chiffres.map(chiffre => Math.pow(parseInt(chiffre), 2)).join('');

//     return parseInt(resultat);
// }

// // Exemples d'utilisation :
// const resultatExemple1 = mettreAuCarreEtConcatener(9119);
// console.log(resultatExemple1); // Output : 811181

// const resultatExemple2 = mettreAuCarreEtConcatener(765);
// console.log(resultatExemple2);





// function mettreAuCarreEtConcatenerAvecIfElse(nombre) {
//     // Convertir le nombre en chaîne de caractères
//     const chiffres = nombre.toString().split('');
//     let resultat = '';

//     // Mettre au carré chaque chiffre et concaténer les résultats avec des if-else
//     for (let i = 0; i < chiffres.length; i++) {
//         const chiffre = parseInt(chiffres[i]);
//         const carre = chiffre * chiffre;

//         if (i === 0) {
//             resultat += carre;
//         } else {
//             resultat += '-' + carre;
//         }
//     }

//     return parseInt(resultat);
// }

// // Exemples d'utilisation :
// const resultatExemple1 = mettreAuCarreEtConcatenerAvecIfElse(9119);
// console.log(resultatExemple1); // Output : 811181

// const resultatExemple2 = mettreAuCarreEtConcatenerAvecIfElse(765);
// console.log(resultatExemple2); // Output : 493625



//exercice 1 chall 3 
