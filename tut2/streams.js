const fs = require('fs');
const readStream = fs.createReadStream('./doc/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./doc/blog4.txt');

// readStream.on('data', (chunk) => {
//   //console.log('\n---NEW CHUNK--- \n');
//   //console.log(chunk);
//   writeStream.write('\nNEW Chunk\n');
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
