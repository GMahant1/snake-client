//creating a variable to hold keyboard data
let connection;


//setting up standard input to listen to userinput via keyboard
//added connection variable

const { connect } = require("http2");

const setUpInput = function (conn) {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  
  return stdin;
};

//creating a function to register data
const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right")
  }
};

module.exports = {setUpInput};