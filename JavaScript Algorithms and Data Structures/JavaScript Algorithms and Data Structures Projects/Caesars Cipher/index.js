function rot13(str) {
    let out='';
    for(let i=0;i<str.length;i++){
        if(/[A-Z]/.test(str[i])){
            let code=str.charCodeAt(i)
            if(code+13>90){
                code=64+(13-(90-code));
            }
            else{
                code+=13;
            }
            out+=String.fromCharCode(code)
        }
        else{
            out+=str[i];
        }
    }
    return out;
}

console.log(rot13("SERR PBQR PNZC"));
