
function calcAverage() {
    let matchScoreOneDauphin = 41;
    let matchScoreTwoDauphin = 23;
    let matchScoreThreeDauphin = 71;
    let matchScoreOneKoalas = 65;
    let matchScoreTwoKoalas = 54;
    let matchScoreOThreeKoalas = 49;

    let MoyenneScoreTotalKoalas = (matchScoreOneKoalas + matchScoreTwoKoalas + matchScoreOThreeKoalas) / 3;
    console.log("la moyenne des koalas est de  " + MoyenneScoreTotalKoalas);
    let MoyenScoreTotalDauphin = (matchScoreOneDauphin + matchScoreThreeDauphin + matchScoreTwoDauphin) / 3;
    console.log("la moyenne des dauphin est de " + MoyenScoreTotalDauphin);

}
let ResultScoreTotale = calcAverage();


function checkWinner () { 
    let matchScoreOneDauphin = 41;
    let matchScoreTwoDauphin = 23;
    let matchScoreThreeDauphin = 71;
    let matchScoreOneKoalas = 65;
    let matchScoreTwoKoalas = 54;
    let matchScoreOThreeKoalas = 49;
    let MoyenneScoreTotalKoalas = (matchScoreOneKoalas + matchScoreTwoKoalas + matchScoreOThreeKoalas) / 3;
    let MoyenScoreTotalDauphin = (matchScoreOneDauphin + matchScoreThreeDauphin + matchScoreTwoDauphin) / 3;

    let CompMoyenKoalas = MoyenneScoreTotalKoalas;
    let CompMoyenDauphin = MoyenScoreTotalDauphin;   
    if (CompMoyenKoalas > CompMoyenDauphin) {
        console.log(' léquipe koala gagne' + " "+ MoyenneScoreTotalKoalas + " " + "vs" +" "+ +MoyenScoreTotalDauphin  );
    } else if (CompMoyenDauphin > CompMoyenKoalas) {
        console.log('victoire des Dauphins');
    } else {
        console.log("match nul ");
    }
}
let EquipeWinner = checkWinner();
// function calculerRemise(NoteTotal) {
//     if (NoteTotal >= 50 && NoteTotal <= 300) {
//         var pourcentage = 0.15;
//         var remise = NoteTotal * pourcentage;
//         console.log("Le pourboire est de 15% de la note : " + remise);
//     } else if (NoteTotal < 50 || NoteTotal > 300) {
//         var pourcentageDeux = 0.20;
//         var remiseDeux = NoteTotal * pourcentageDeux;
//         console.log("Le pourboire est de 20% de la note : " + remiseDeux);
//     } else {
//         console.log("La note totale n'est pas dans la plage spécifiée.");
//     }
// }

// // Exemple d'utilisation de la fonction avec une note totale de 301
// calculerRemise(200);