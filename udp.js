const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (msg, rinfo) => {
  console.log(`socket got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
socket.bind(8081);

// from client echo "hi" | nc -w1 -u 127.0.0.1 8081
