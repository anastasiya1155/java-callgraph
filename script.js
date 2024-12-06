const fs = require('fs');

console.log("Hello world!");
const args = process.argv.slice(2);
console.log("args", args);
fs.readFileSync(args[0] + "/qodana.sarif.json");
console.log("finished reading");
fs.writeFileSync("./new_file.java", "System.out.println(\"Hello\")");
console.log("finished writing");
