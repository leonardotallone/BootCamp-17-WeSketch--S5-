const path = require("path");
const express = require("express");
const app = express();
const socketio = require("socket.io");

const server = app.listen(1337, function () {

  console.log("The server is listening on port 1337!");
  
});

var io = socketio(server);

io.on("connection", function (socket) {
  console.log("Un nuevo cliente se ha conectado!");
  console.log(socket.id);
  server.on("draw",function(){})
  socket.on("disconnect", () => {
    console.log("El usuario se ha desconectado");
  });
  
});

app.use(express.static(path.join(__dirname, "browser")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// server.on("draw",function(){})
// client.emit("draw",function(){})
