const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('terminal-commands.js', (err) => {
    if (err) throw err;

    console.log('success')
  });

};

module.exports.mkdir = () => {
  fs.mkdir('terminal-commands', (err) => {
    if (err) throw err;

    console.log('success')
  });

};