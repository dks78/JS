let DauphinScoreFinale = 100 + 10 + 20 / 3 ;
let KoalasScoreFianl = 100 + 200 + 300 / 3 ;
const  AucuneEquipeGagne = "vu que le score est inférieur a 100 Aucune equipe gagne ";


// if (  DauphinScoreFinale > KoalasScoreFianl) {
//     console.log("Victoire des Dauphin");
// } else if (DauphinScoreFinale < KoalasScoreFianl) {
//     console.log("Victoire des Koalac");
// } else {
   
// }

// if ( DauphinScoreFinale <= 100 || KoalasScoreFianl <=100  ){
//     console.log(AucuneEquipeGagne);
// } else  {
// console.log("");
// }



if ( DauphinScoreFinale > KoalasScoreFianl ){
    console.log("victoir des Dauphin ");
     if (DauphinScoreFinale < KoalasScoreFianl){
        console.log("Victoir des Koalac");
    }  
     if ( DauphinScoreFinale <= 100 || KoalasScoreFianl <=100 ){
        console.log(AucuneEquipeGagne);
    } else{
        console.log("");
    }
} 
