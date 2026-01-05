let arr = [1, 2, 3, 4, 5, 6];
let ans = arr.reduce(function(accumulator , val){
    return accumulator + val;
},0);           
console.log(ans);