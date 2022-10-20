//importing IP and PORT from constants file
const { IP, PORT } = require("./constants");

const net = require("net");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  //when receiving data performs action
  conn.on("data", (data) => {
    console.log("Message from server: ", data);
  });

  //when connected performs actions
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GM");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: down");
  // })
  //hard code to check if snake moves

  return conn;
};

module.exports = { connect };