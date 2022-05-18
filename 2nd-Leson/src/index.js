const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
// const argv = yargs(process.argv).argv


yargs(hideBin(process.argv))
.command(
  "Add",
  "Adds two numbers",
  (yargs) => yargs,
  (argv) => {
    console.log("The sum is =", argv.num1 + argv.num2);
  }
)
.option('num1', {allias: "n1", type: "number", descr: "first number"})
.option('num2', {allias: "n2", type: "number", descr: "second number"})
.parse();


// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }