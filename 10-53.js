

/*
4. Tell me about closure, write an example of closure on the code pad, call the closure function
5. Write a function that can do : add(1), add(1)(2), add(1)(2)(3)(4)(5)
6. What happens if you recursively call and super long array? Stack overflow. 
Function one(){
Let x = array1.pop()
//do something
if(array1){ 
one()   //recursion
   }
}
How do you fix it? So that you dont break the call stack?
7. Reverse a string, but not the special characters. 
  ‘ab-cd#ef&g’   -> gf-ed#cb&a’
*/
//4./
function clo(){
    let n = 1;
    function t1(){
        return n += 1;
    }
    return t1;
}
var tmp = clo();
//console.log(tmp());
//console.log(tmp());

function clo(){
    let n = 1;
    return function (){
        return n += 1;
    }
}
var tmp = clo();
//console.log(tmp());
//console.log(tmp());

//5. Write a function that can do : add(1), add(1)(2), add(1)(2)(3)(4)(5)
/*function add(x, y) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());  */

var x = 0;
function add1(n){

    if(n === undefined){
        return x;
    }
    else{
        x += n;
        return add1;
    }
}
console.log( add1(2)(3)(5)() );

var stack = [];
function add2(n){
    if(n === undefined){
        tmp = stack.reduce((a, b)=>a + b)
        console.log('tmp',tmp)
        return tmp;//stack.reduce((sum, node) => {sum + node}, 0)
    }
    else{
        stack.push(n)
        //console.log(stack)
        return add2;
    }
}
console.log(add2(2)(3)(5)());

function add3(n){
    return function inner1(m){
        return function inner2(x){
            return n + m + x;
        }
    }
}
console.log('add3', add3(2)(3));

function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
console.log('sum', sum(2, 3));         // 5

function add(n){
    var addNext = function(x) {
      return add(n + x);
    };
  
    addNext.valueOf = function() {
      return n;
    };
  
    return addNext;
  }
  
console.log(add(1)(2)(3).valueOf());//true
console.log(add(1)(2)(3)(4)==10);//true


/*
6. What happens if you recursively call and super long array? Stack overflow. 
Function one(){
Let x = array1.pop()
//do something
if(array1){ 
one()   //recursion
   }
}
How do you fix it? So that you dont break the call stack?*/
//http://latentflip.com/what-is-the-event-loop-anyway
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D