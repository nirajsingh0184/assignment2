console.log('Program Initiate');

var async = require('async');
async.series([
    function (callback) {
        console.log('First Function');
        callback(null, '1');
    },
    function (callback) {
        console.log('Second Function');
        callback(null, '2');
    }
],
function (err, result) {
    console.log(result);
});
console.log('Program End');