// Functional Programming

// mapping means take one array, run a function and create a new array out of it 
function mapForEach(arr,fn) {

    var newArr = []

// looping over whatever arr has passed in the function
    for (var i=0; i < arr.length; i++) {
        // add to that new array every item that you give me with push 
        newArr.push(
            // call a function and pass in that array item. 
            // your arr item which is processed by a function that you also give me 
            fn(arr[i])
        )
    };
     return newArr;
}
// variable stored in global context 
var arr1 = [1,2,3];

console.log(arr1);

// cal an expression function because it needs to accept and item, look at fn(arr [i])
// called the function
// gave it an array arr1
// fn parameter - told it what to do to each item in the array using function(item){return item *2}
var arr2 = mapForEach(arr1, function(item){
    return item * 2; 
});
// now you can tell it to do anything to that array 
var arr2 = mapForEach(arr1, function(item){
    return item > 2; 
});

console.log(arr2);

// check to see if a number is past a certain limit 
var checkPastLimit = function(limiter,item){
    return item > limiter;
}
// use bind because checkPastLimit has two parameters and mapForEach only has one. defualts 1 as the limiter
// item is the array 
var arr4 = mapForEach(arr1,checkPastLimit.bind(this,1));

console.log(arr4);

// the function is creating an object 
var checkPastLimitSimplified = function(limiter) {
    return function(limiter,item) {
        return item > limiter;
    }.bind(this,limiter);
};

var arr5 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(arr5);

