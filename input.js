//setting up standard input to listen to userinput via keyboard

const setUpInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//creating a function to register data
const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  }
};

//setupInput();

module.exports = {setUpInput};