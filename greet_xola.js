import chalk from 'chalk';
import figlet from 'figlet'
import greet from './greet.js'

figlet(greet("Johnson"), function(err, data) {
    "use strict"
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        // return;
    }
    const styledMessage = chalk.bgMagenta.black(greet('Johnson'));
    console.log(styledMessage)
    console.log(data)
});