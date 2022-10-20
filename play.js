const { connect } = require("./client");
const { setUpInput } = require("./input.js");

console.log("Connecting ...");

let conn = connect();

setUpInput(conn);

