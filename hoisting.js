console.log(notyetdeclared);
// 打印 'undefined'
 
var notyetdeclared = 'now it is declared';
 
hoisting();
 
function hoisting(){
  console.log(notyetdeclared);
  // 打印 'undefined'
  
var notyetdeclared = 'declared differently';
  
  console.log(notyetdeclared);
  // 打印 'declared differently'
}