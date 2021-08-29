const fs = require('fs');

// reading files
// fs.readFile('./tut2/doc/blog1.txt',(err,data)=> {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
//console.log("last line");

// writing files
// fs.writeFile('./tut2/doc/blog1.txt','hello from Mazen',()=> {
//     console.log('success');
// });

// fs.writeFile('./tut2/doc/blog2.txt','hello Again',()=> {
//     console.log('success');
// });

// creating directory
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

// deleting files
if (fs.existsSync('./tut2/doc/deleteme.txt')) {
  fs.unlink('./tut2/doc/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
