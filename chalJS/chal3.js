let userBernardpoid = 98;
let userBernardTaille = 2.9;

let userMarcelpoid = 92;
let userMarcelTaille = 1.95;

let bernardHigherIMC = userBernardTaille && userBernardpoid;


let imcuserBernard = userBernardpoid / (userBernardTaille * userBernardTaille);
let imcuserMarcel =  userMarcelpoid/ (userMarcelTaille * userMarcelTaille);


if (bernardHigherIMC > userMarcelTaille && bernardHigherIMC > userMarcelpoid ){
    console.log('Bernard a un IMC plus élevé que Marcel ');
    
} else {
    console.log('Marcel a un IMC plus élevé que Mark');
}
console.log("le IMC TOTAL ET DE:" +" " + userBernardpoid + " " + "en poids et de" +" " + userBernardTaille + " " + "en taille" );
console.log("Bernard a un IMC" +" "+ "(" + imcuserBernard + ")" +" "+ "plus élever que Marcel" + " " + "("+ imcuserMarcel  + ")");