/*
remove all the word of the 2nd string from the 1st string 
and print the remain string
str1 = 'Add this name to that name';
str2 = "that name"
remain= "Add this to name"
*/
function remain(str1, str2){

    let arr1 = str1.split(" ");
    let arr2 = str2.split(" ");
    console.log(arr1, arr2);
    for(let j = 0; j < arr2.length; j++){
        let index = arr1.indexOf(arr2[j]);
        if(index > -1){
            arr1 = arr1.slice(0, index).concat( arr1.slice(index+1,));
        }
    }
    return arr1.join(" ");
}
str1 = 'Add this name to that name';
str2 = "that name"; 
console.log( remain(str1, str2));