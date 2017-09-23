const fs = require('fs');
const files = fs.readdirSync('.');
for ( let file in files) {
    if (files.hasOwnProperty(file))
    console.log(files[file]);
}


