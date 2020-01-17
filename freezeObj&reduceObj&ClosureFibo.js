function getData(a = 37, b, c){

    return Object.freeze({a, b, location:5, c:4});
}

let p = {...getData(38, 11, 0), location: "Santa Clara"};
console.log(p);

console.log( [{val:3}, {val:2}, {val:3}, {val:4}, {val:5}].reduce(function(acc, cur){
    return acc + cur.val;
}, 0 ));

let arr = [1,1,2,2,3,1];
console.log( arr.filter((a, index) => arr.indexOf(a) === index) )
console.log(arr.sort((a, b) => a - b))


function Fibo(){
    let ini1 = 0;
    let ini2 = 1;
    var getNext = function(){
        let tmp = ini1 + ini2;
        ini1 = ini2;
        ini2 = tmp;
        return tmp;
    }
    return getNext;
}
var getNext = Fibo();
console.log("Fibo", getNext());
console.log("Fibo", getNext());
console.log("Fibo", getNext());
console.log("Fibo", getNext());