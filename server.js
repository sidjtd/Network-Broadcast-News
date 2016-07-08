'use strict';
const net = require('net');
const fs = require('fs');
const logFile = fs.createWriteStream('./server.log');
let users = [];

const server = net.createServer((socket)=>{
    users.push(socket);
    console.log('Client Connected');
    socket.on('data', ( data ) => {
      if(socket.name === undefined){
        socket.name = data.toString().replace(/(\r\n|\n|\r)/gm,"");
                    //This crazy thing is a regex that removes the INVISIBLE \N break!
        return;
      }
      for (var i = 0; i < users.length; i++) {
        if(users[i] !== socket){ //if sender is same as receiver dont send!
          users[i].write(socket.name + ': ' + data);
        }
      }
      process.stdout.write(socket.name + ': ' + data.toString());
    });
});

process.stdin.on('data', (data) => {
  for (var i = 0; i < users.length; i++) {
    users[i].write('[ADMIN]: ' + data);
  }
});

server.listen('6969', () =>{
  console.log('Server listening on port:6969');
});
