const net = require('net');
const server = net.createServer((client) => {
    client.setEncoding('utf-8');
    client.setTimeout(1000);
    client.on('data', (data) => {
        console.log("-> "+data);
    });
});

server.listen(5000, () => {
    let serverInfo = server.address();
    console.log('TCP server listen on Port : ' + serverInfo.port);
    server.on('close', () => {
        console.log('TCP server socket is closed.');
    });
    server.on('error', (error) => {
        console.error(JSON.stringify(error));
    });
});




function getConn(connName){
    let option = {
        host:'localhost',
        port: 6000
    }
    let client = net.createConnection(option);
    client.setTimeout(1000);
    return client;
}

process.stdin.on('data', (data) => {
  let nodeClient = getConn('Node');
  nodeClient.write(data.toString().trim());
  // console.log(data.toString());
});
