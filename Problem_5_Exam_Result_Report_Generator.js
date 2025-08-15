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

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));
