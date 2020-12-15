
//importa o mudolo de eventos, cria um objeto chamado eventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Cria um eevent Handler
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

// Cria um event Handler
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Adiciona um listener para o evento connection. 
eventEmitter.addListener('connection', listener1);

// Vincula o event handler ao event 
eventEmitter.on('connection', listener2);

////Retorna o número de "ouvinetes" do evento 'connection"
var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//  // Dispara o evento 'connection'
eventEmitter.emit('connection');

//  Remove o vinculo da funcao listenter1 com o evento 'connection'
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Dispara o evento 'connection'
eventEmitter.emit('connection');

//Retorna o número de "ouvinetes" do evento 'connection"
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Imprime na tela a mensagem "program ended"
console.log("Program Ended.");
