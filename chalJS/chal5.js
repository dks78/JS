// let NoteTotal = 301; 

// if ( NoteTotal >= 50 && NoteTotal <= 300 ) {
//     var pourcentage = 0.15;
//     var remise = NoteTotal * pourcentage;
//     console.log("Le pourboir est de 15% de la note " + " " + remise);
// } else if (NoteTotal < 50 || NoteTotal > 300   ) {
//     var pourcentageDeux = 0.20 
//     var remiseDeux = NoteTotal * pourcentageDeux;
//     console.log(" Le pourboir et de 20% de la note" + " "+ remiseDeux);
// }

// let NoteTotal = 301;

// const remise = (NoteTotal >= 50 && NoteTotal <= 300) 
//     ? NoteTotal * 0.15
//     : (NoteTotal < 50 || NoteTotal > 300)
//         ? NoteTotal * 0.20
//         : undefined;

// const message = (remise !== undefined)
//     ? `Le pourboire est de ${remise}% de la note.`
//     : "La note totale n'est pas dans la plage spécifiée.";

console.log(message);
function calculerRemise(NoteTotal) {
    if (NoteTotal >= 50 && NoteTotal <= 300) {
        let pourcentage = 0.15;
        let remise = NoteTotal * pourcentage;
        console.log("Le pourboire est de 15% de la note : " + remise);
    } else if (NoteTotal < 50 || NoteTotal > 300) {
        let  pourcentageDeux = 0.20;
        let remiseDeux = NoteTotal * pourcentageDeux;
        console.log("Le pourboire est de 20% de la note : " + remiseDeux);
    } else {
        console.log("La note totale n'est pas dans la plage spécifiée.");
    }
}

// Exemple d'utilisation de la fonction avec une note totale de 301
calculerRemise(200);