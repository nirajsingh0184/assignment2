console.log('Program Initiate'); 

var async = require('async'); 
async.auto({ 
one: function (callback) { 
setTimeout(function () { 
console.log('First Step --> '); 
callback(null, '1'); 
}, 3000); 
}, 
two: [ 
'one', function (arg1, callback) { 
console.log('Second Step --> ' + JSON.stringify(arg1)); 
callback(null, '2'); 
} 
], 
three: [ 
function (callback) { 
console.log('thrid Step'); 
callback(null, '3'); 
} 
] 
}, 
function (err, result) { 
console.log(result); 
}); 

console.log('Program End');