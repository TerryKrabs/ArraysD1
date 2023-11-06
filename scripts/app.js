alert()


// let can be used too create strings ints and bool's
let MyString = "hello";
let MyInt = "50";
let MyBool = false;

let myIntArray = [1, 2 , 3, 4, 5];
let myStrArray = ["pizza", "taco", "chinese", "pringles", "chicken"];

let MyMixedArray = ["taco", 2, "bing", 5, "bong", true];

console.log(myIntArray);

myIntArray[0] = 98;
myIntArray[2] = false;
myIntArray[4] = "Ken the ben 10"



console.log(myIntArray);

//let twodeeArray = [["bing", 3, "bong"],["wtf is this", 4, "daaang"],["xavier", "this is", "getting long"] ];
let twodeeArray = [
    ["bing", 3, "bong"],
    ["wtf is this", 4, "daaang"],
    ["xavier", "this is", "getting long"],
];

console.log(twodeeArray)
console.log(twodeeArray[0][0])
console.log(twodeeArray[2][0])

let injectHere = document.getElementById("injectHere")
let btnshow = document.getElementById("btnshow")
btnshow.addEventListener("click", function(e) {

    //injectHere.innerText = "Breakfast";
    injectHere.innerText = twodeeArray[2][0];
})