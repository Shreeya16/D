const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

// app.listen(3000, function(){
//   console.log(`Listening on port ${chalk.green('3000')}`);
// });

app.listen(3000, function(){
  debug(`Listening on port ${chalk.green('3000')}`);
});

