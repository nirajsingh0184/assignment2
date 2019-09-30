console.log('Program Initiate');

var async = require('async');
async.waterfall([
    function (callback) {
        console.log('First Function');
        callback(null, '1', '2');
    },
    function (arg1, arg2, callback) {
        console.log('Second Function' + arg1 + ' ' + arg2);
        callback(null, '3');
    },
    function (arg1, callback) {
        console.log('Third Function' + arg1);
        callback(null, 'final gffd');
    }
], function (err, result) {
    console.log('Main Callback>' + result);
});

console.log('Program End');