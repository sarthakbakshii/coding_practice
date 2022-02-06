const checkPalendrome = (str) =>{
    const temp = str;
    let output = "";
    for( let i = str.length -1 ; i >= 0 ; i--){
        output += str[i]
    }
    let out = temp == output?"yes":"no";
    console.log(out);
}

checkPalendrome("ada")