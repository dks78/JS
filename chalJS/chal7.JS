


function calcTip (blis){
    if ( blis >= 50 && blis <= 300){
    let pourboir = 0.15;
    let remiseTotale = blis * pourboir;
    return remiseTotale;
    }
    else if (blis < 50 || blis > 300  ){ 
    let pourboir2 = 0.20;
    let remiseTotaleDeux = pourboir2 * blis;
    return remiseTotaleDeux
    }
}
calcTip(125);
let tips = [];

tips.push(calcTip(125));
tips.push(calcTip(555));
tips.push(calcTip(44));

// console.log("pour la valeur" +" " + 125 ,555,44 + " "+ "le pourboir est ", tips);



let toto =  [125 , 555 , 44];
console.log( "pour la valeur 1 le prix total est de "+ " " + toto[0]+ " " +"et son pourboir est de "+tips[0]);
console.log( "pour la valeur 2 le prix total est de "+ " " + toto[1]+ " " +"et son pourboir est de "+tips[1]);
console.log( "pour la valeur 3 le prix total est de "+ " " + toto[2]+ " " +"et son pourboir est de "+tips[2]);