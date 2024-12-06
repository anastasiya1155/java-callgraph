const fs = require('fs');

console.log("Hello world!");
fs.writeFileSync("./new_file.java", "System.out.println(\"Hello\")");
