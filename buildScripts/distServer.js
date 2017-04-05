import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import browserSync from 'browser-sync';
import chalk from 'chalk';

console.log(chalk.blue('Opening production build...'));

// Babel and other libs use this for builds
process.env.NODE_ENV = 'production';

/* eslint-disable no-console */
const port = process.env.PORT || 3000;
const app = express();

// for pug files
app.locals.env = process.env;

// For gzip
app.use(compression());
app.use(express.static(path.join(__dirname,'../dist')));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  (err)? console.log(err):open('http://localhost:'+port);
});

// if we got this far, the build succeeded.
console.log(chalk.green('Your app is compiled in production mode in /dist. It\'s ready to roll!'));
