const net = require("net");

const connect = function () {

  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  //when receiving data performs action
  conn.on("data", (data) => {
    console.log("Message from server: ", data);
  })

  //when connected performs actions
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GM");
  })

  // conn.on("connect", () => {
  //   conn.write("Move: down");
  // })
  //hard code to check if snake moves

  return conn;
};

//console.log("Connecting ...");
//connect();

module.exports = {connect};