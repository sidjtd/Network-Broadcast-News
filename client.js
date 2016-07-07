
const net = require('net');

const client = new net.Socket();

client.connect({port: 6969, host: 'localhost'}, (() => {
console.log('Connected 1');  // acknowledge socket connection
client.write('C: "Yo Serve! Its Client 1."'); // send info to Server
client.write('C: "Choose a name!"'); // send info to Server
process.stdin.on('data', (data) => {
  client.write(data);
  });
}));

client.on('data', (data) => {
console.log('C: Received from ' + "'"+data+"'"); // display info received from server
//client.destroy(); // kill client after server's response
});

process.stdin.on('data', (chunk)=>{
  client.write(chunk);
});



//This closes the connection.
    /*client.on('close', function() {
    console.log('Client: Connection closed');
    });*/