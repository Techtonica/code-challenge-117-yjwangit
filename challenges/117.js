// ## Array Intersection
//
// _Idea from_ _[lodash _.intersection](https://lodash.com/docs/4.17.15#intersection)_
//
// Given two arrays, find the item(s) that are present in both.
//
// ```
// `let a = ['A', 'B', 'Z']
// let b = ['Z', 'X', 'Y']
//
// intersection(a, b)
// _// => ['Z']_`
//
// ```
//
// To get it working, don't worry about efficiency. Later we'll learn about specialized data structures that make this simpler/efficient.

function intersection(a, b){
    let inter = [];
    a.forEach(function(item,index){
        if (b.indexOf(item)!==-1){
            inter.push(item);
        }
    });  
   return inter;
 }
module.exports = intersection;
