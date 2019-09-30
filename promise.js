let promisetostudy=new Promise(function(resolve,reject){
let dostudy=false;
if(dostudy){
    resolve('Studied');
}else{
    reject('not studied');
}
});
promisetostudy.then(function(fromResolve){
    console.log('I have' + fromResolve);
}).catch(function(fromReject){
console.log('I have' + fromReject);
})
