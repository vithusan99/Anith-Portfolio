const EventEmitter= require('events');
// const emitter = new EventEmitter;
var url ='http://mylogger.io/log';

class Logger extends EventEmitter{

    show(msg){
       console.log(msg);
       // raise event 
   this.emit('messageLogged',{id:1,link:'http://'})
   
   }
}
// ---export a object 
// module.exports.show=show; 
module.exports=Logger; 
// ---export a single method 
// module.exports =show; 


// ---can write 
// exports.show=show;

