//Problem 01 - Train TT's Fine Calculator 
function totalFine( fare ) { 
    if(typeof(fare) === "string"){
        return "Invalid";
    }
    else if(fare <= 0){
        return "Invalid";
    }
    else if(fare > 0){
        var fine = fare + (fare * 0.2) + 30;
        return fine;
    }
} 

console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));
