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

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));
