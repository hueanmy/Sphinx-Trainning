function add(a,b){
  return a + b;
}
function sub(a,b){
  return a - b;
}
function mul(a,b){
  return a * b;
}
function division(a,b){
  if(b>0){
    return a/b;
  }
  else
    return "No contacts";
}
console.log(division(4,0));
