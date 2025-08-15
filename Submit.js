//Github Repository: https://github.com/SOrtINgmASteR/Programming-Hero-Assignment-4

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


//Problem 02 - Clean & Capitalize Characters
function onlyCharacter( str ) { 
    if(typeof(str) !== "string"){
        return "Invalid";
    }
    var withoutSpace = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            withoutSpace += str.charAt(i);
        }
    }
    var withoutSpaceCapitalized = withoutSpace.toUpperCase();
    return withoutSpaceCapitalized;
}


//Problem 03 - FIFA Best Team Award
function bestTeam( player1, player2 ) { 
    if (typeof(player1) !== 'object' || typeof(player2) !== 'object'){
        return "Invalid";
    }
    var score1, score2;
    score1 = player1.foul + player1.cardY + player1.cardR;
    score2 = player2.foul + player2.cardY + player2.cardR;
    if(score1 < score2) {
        return player1.name;
    }
    else if(score1 > score2) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}


//Problem 04 - Same Same But Different
function isSame(arr1 , arr2) {  
    if(Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
        return "Invalid";
    }
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
} 


//Problem 05 - Exam Result Report Generator
function resultReport( marks ) { 
    if(Array.isArray(marks) !== true){
        return "Invalid";
    }
    var pass = 0, fail = 0, totalNumber = 0, averageNumber = 0;
    for(let i = 0; i < marks.length; i++) {
        if(marks[i] < 40) fail += 1;
        else if(marks[i] >= 40) pass += 1;
        totalNumber += marks[i];
    }
    if (marks.length > 0) {    
        averageNumber = Math.round(totalNumber / marks.length);
    }
    return {finalScore: averageNumber, pass: pass, fail: fail};
}
