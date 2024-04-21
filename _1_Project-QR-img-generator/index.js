/* 
** This project uses 2 npm packages: **

(1) inquirer - Allow us to get input from the user.

(2) qr-image - Allow us to generate images as PNG for us to save into our local file system.

(3) Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import qr from 'qr-image';
// var qr = require('qr-image');
import fs from 'fs';

inquirer
.prompt([{
    // Pass your questions in here
    message: "Type in your URL: ", 
    name : "URL" 
   }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  