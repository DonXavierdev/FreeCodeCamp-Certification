function palindrome(str){
  let out='';
  for(let i=0;i<str.length;i++){
    if(str[i].match(/[0-9a-z]/i)){
      out+=str[i];
    } 
  }
  out=out.toLowerCase();
  return out==out.split('').reverse().join('');
}
console.log(palindrome('1 eye for of 1 eye.'))