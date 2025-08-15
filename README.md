# 🚀 Programming Hero Assignment 4

This repository contains the solutions for Programming Hero Assignment 4. It includes 5 JavaScript problem-solving tasks and a helper script for submission. ✨

## 💡 Problem Solutions

1. **Train TTs Fine Calculator** (`Problem_1_Train_TTs_Fine_Calculator.js`)
2. **Clean & Capitalize Characters** (`Problem_2_ Clean_&_Capitalize_Characters.js`)
3. **FIFA Best Team Award** (`Problem_3_FIFA_Best_Team_Award.js`)
4. **Same Same But Different** (`Problem_4_Same_Same_But_Different.js`)
5. **Exam Result Report Generator** (`Problem_5_Exam_Result_Report_Generator.js`)

- **Submit File** (`Submit.js`)

## 🚦 How to Run

- Each problem is a separate JavaScript file.
- Use Node.js from Windows PowerShell. Quote paths because some filenames contain spaces and special characters.

```powershell
node ".\Problem_1_Train_TTs_Fine_Calculator.js"
node ".\Problem_2_ Clean_&_Capitalize_Characters.js"
node ".\Problem_3_FIFA_Best_Team_Award.js"
node ".\Problem_4_Same_Same_But_Different.js"
node ".\Problem_5_Exam_Result_Report_Generator.js"

# Optional: submission file
node ".\Submit.js"
```

## 👨‍💻 Function Calls
```js
console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));

console.log(bestTeam({name: "Brazil", foul: 5, cardY: 1, cardR: 0}, {name: "Argentina", foul: 7, cardY: 0, cardR: 0}));
console.log(bestTeam({name: "Germany", foul: 12, cardY: 0, cardR: 0}, {name: "Sweden", foul: 7, cardY: 4, cardR: 1}));
console.log(bestTeam({name: "Germany", foul: 10, cardY: 1, cardR: 1}, {name: "France", foul: 10, cardY: 2, cardR: 1}));
console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));


console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
console.log(isSame([1, undefined , 3] , [1,null ,3]));
console.log(isSame([1, 4, 5], [1, 4, 5]));
console.log(isSame([1, "4", 4] ,[1, 4, 4]));
console.log(isSame([2, 5, 6], 256));
console.log(isSame({data: [2, 5, 6]} , [2, 5, 6]));

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));
```


## 🛠️ Technologies Used

- JavaScript (Node.js)

## � Author

- GitHub: [SOrtINgmASteR](https://github.com/SOrtINgmASteR)
