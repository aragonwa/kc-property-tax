/* eslint-disable no-console */
import chalk from 'chalk';
import pug from 'pug';
import fs from 'fs';
import less from 'less';

// Babel and other libs use this for builds
process.env.NODE_ENV = 'production';

let succeed = true;

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

// Create dist/css and dist/js directorys
if (!fs.existsSync('./dist/css')) {
  fs.mkdirSync('./dist/css');
}
if (!fs.existsSync('./dist/js')) {
  fs.mkdirSync('./dist/js');
}

//http://www.datchley.name/promise-patterns-anti-patterns/
// Crunch pug files
const pugPromise = new Promise((resolve, reject) => {
  const html = pug.renderFile('src/pug/index.pug');
  if(html){
    resolve(html);
  }
  throw new Error("Error in processing Pug files")
});

  // .then(()=>{
  //   if (succeed) console.log(chalk.green('Your app has been built for production and written to /dist!'));
  // })
pugPromise
  .then((html) => {
    return html;
  })
  .then((html)=>{
    fs.writeFile('dist/index.html', html,
      err => {
        if (err) {
          return console.log(chalk.error(err));
        }
        console.log(chalk.yellow('HTML files created \n'));
      });
  })
  .catch( err => {
    console.log(chalk.error(err));
  });

const lessPromise = new Promise((resolve, reject) => {
    let lessFile;
    fs.readFile('src/assets/less/custom.less', 'utf8', (err, data) => {
    if (err) {
      return console.log(chalk.error(err));
    }
    renderLess(data);
  });

  if(html){
    resolve(html);
  }
  throw new Error("Error in processing Pug files")
});


fs.readFile('src/assets/less/custom.less', 'utf8', (err, data) => {
  if (err) {
    return console.log(chalk.error(err));
  }
  renderLess(data);
});

function renderLess (data) {
  less.render(data, {sourceMap: {}})
    .then(function (output) {
      fs.writeFile('dist/css/index.css',
        output.css,
        err => {
          if (err) {
            return console.log(chalk.error(err));
          }
          console.log(chalk.yellow('CSS files created \n'));
        }
      );}),
  function (err) {
    return console.log(chalk.error(err));
  };
}
