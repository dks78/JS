


// calcTip(100);



// let notes = [ 22 ];

// function calcTip (notes){
//     if (notes >= 50 &&notes <= 300){
//     let pourboir = 0.15;
//     console.log(notes * pourboir);
//     console.log(remiseTotale);

//     }
//     else if (notes < 50 ||notes > 300  ){ 
//     let pourboir2 = 0.20;
//     let remiseTotaleDeux = pourboir2 *notes;
//     console.log(remiseTotaleDeux);
//     }
// }
// calcTip(notes);


function calcTipAndTotal(notes) {
    let pourboir;
    let remiseTotale;

    if (notes >= 50 && notes <= 300) {
        pourboir = 0.15;
    } else if (notes < 50 || notes > 300) {
        pourboir = 0.20;
    }

    remiseTotale = notes + notes * pourboir;

    return [notes * pourboir, remiseTotale];
}

// Tableau des valeurs à calculer
let notesArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let resultatsArray = [];

// Calcul et stockage des résultats dans le tableau
for (let i = 0; i < notesArray.length; i++) {
    let resultats = calcTipAndTotal(notesArray[i]);
    resultatsArray.push(resultats);
}


// Affichage du tableau avec les résultats
console.log(resultatsArray);