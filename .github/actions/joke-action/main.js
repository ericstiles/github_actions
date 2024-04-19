const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

async function dump(){
    console.log("getting ev");
    for (let key in process.env) {
      console.log(`${key}: ${process.env[key]}`);
    }
}
run();
dump();
