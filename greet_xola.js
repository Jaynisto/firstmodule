import chalk from 'chalk';
import figlet from 'figlet'
import greet from './greet.js'

figlet(greet("Xola"), function(err, data) {
    "use strict"
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const styledMessage = chalk.bgMagenta.black(data);
    console.log(styledMessage)
});