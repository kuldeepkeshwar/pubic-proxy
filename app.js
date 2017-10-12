var proxy = require('express-http-proxy');
var app = require('express')();
const { argv } = require('yargs');

const target = argv.target;
if(!target){
    new Error('target is missing !!!');
}
console.log(`proxying : ${target}`);
app.use('/', proxy(target,{
    https:true
}));
module.exports =app;