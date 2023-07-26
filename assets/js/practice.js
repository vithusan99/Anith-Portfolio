const Logger = require('./logger')
var msg="hrr"

// to check error --- jshint 
// logger.show('hi hello')
// to get single method 
// show('hi hello')


// can write 


// using modules
// -path 
const path = require('path');
var pathObj = path.parse(__filename);

// -os 
const os = require('os');
var osObj = os.freemem();

// -file-system 
const file = require('fs');
var fsObj = file.readdirSync('./')
// console.log(fsObj);
// file.readdir('#',function(err,files){
//     if(err) console.log('Error',err)
//     else console.log('Result',files);
// })

// -------------------------------------------------------
// eevent 
const EventEmitter= require('events');
// const emitter = new EventEmitter;
const logger = new Logger;
// register a listeners 
logger.on('messageLogged', (arg)=>{
    console.log('Listner called',arg);
})
logger.show('here you logged')
// emitter.on('messageLogged', function(){
//     console.log('Listner called');
// })

// emitter.on('messageLogged', (arg)=>{
//     console.log('Listner called',arg);
// })

// raise an event
// emitter.emit('messageLogged',{id:1,link:'http://'})