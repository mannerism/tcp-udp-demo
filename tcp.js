const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Hello.");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});

server.listen(8080);

// 1. connect with command line: telnet 127.0.0.1 8080
// 2. send random string and press enter
