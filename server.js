const fs = require('fs');

//When connection happens, socket is created and stays open until it is closed by the user
var chatArray = [];

var idNum = 1;
var userId = 'Guest';

const server = net.createServer((socket) => {
  //BAD
  //This doesn't add idNum for some reason?
  socket.user = userId+idNum+": ";
  idNum += 1;

  chatArray.push(socket);
  socket.on('data', (data) => {
    if(socket.user===undefined){
      socket.user = data.toString().replace(/(\r\n|\n|\r)/gm,"");
      return;
    }



  for(var i = 0; i < users.length; i++){

  }
  console.log((new Date())+'S: A client connected to server...');
    var string = (data.toString());
    console.log("test",userId+string);
    });

  //Prepping the items for ship out

  //My initial test stuff
  process.stdout.write("I read this once. ");
  socket.write('S: Hey Clients. Its server. ');
  socket.on('data', (data) => {
  //console.log(data.toString());
    });

  process.stdin.on('data', (chunk)=>{
    socket.write(chunk);
  });
  //return function for unique user is very bad idea?

});

server.listen('6969', () => {
 console.log('S: Server listening on port 6969');
});
