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


// {
//   "name": "kc-propery-tax",
//   "version": "0.1.0",
//   "scripts": {
//     "prestart": "babel-node buildScripts/startMessage",
//     "start": "npm-run-all --parallel security-check less pug open:src",
//     "clean-dist": "rimraf ./dist && mkdir dist",
//     "pug": "pug src/pug/index.pug --out dist",
//     "pug:watch": "npm run pug -- -w",
//     "less": "lessc src/less/custom.less src/assets/css/custom.css",
//     "less:build": "lessc src/less/custom.less dist/css/custom.css --source-map=dist/css/custom.map.css",
//     "less:watch": "watch 'npm run less' src/less",
//     "clean:css": "postcss src/assets/css/custom.css --use autoprefixer -o build/src/css/custom.css",
//     "open:src": "babel-node buildScripts/srcServer",
//     "security-check": "nsp check",
//     "prebuild": "npm run clean-dist",
//     "build": "babel-node buildScripts/build.js",
//     "postbuild": "babel-node buildScripts/distServer.js"
//   },
//   "devDependencies": {
//     "autoprefixer": "^6.7.6",
//     "babel-cli": "^6.24.0",
//     "babel-core": "^6.24.0",
//     "babel-loader": "^6.4.1",
//     "babel-preset-latest": "^6.24.0",
//     "babel-register": "^6.24.0",
//     "chalk": "^1.1.3",
//     "compression": "^1.6.2",
//     "cssnano": "^3.10.0",
//     "express": "^4.15.2",
//     "grunt": "^1.0.1",
//     "grunt-browser-sync": "^2.2.0",
//     "grunt-contrib-clean": "~1.0.0",
//     "grunt-contrib-concat": "~1.0.1",
//     "grunt-contrib-copy": "~1.0.0",
//     "grunt-contrib-less": "~1.3.0",
//     "grunt-contrib-pug": "^1.0.0",
//     "grunt-contrib-uglify": "~1.0.1",
//     "grunt-contrib-watch": "~1.0.0",
//     "grunt-css-purge": "0.0.4",
//     "grunt-csscomb": "^3.1.1",
//     "grunt-postcss": "^0.8.0",
//     "less": "^2.7.2",
//     "livereload": "^0.6.2",
//     "load-grunt-config": "~0.19.2",
//     "load-grunt-tasks": "~3.5.0",
//     "morgan": "^1.8.1",
//     "nodemon": "^1.11.0",
//     "npm-run-all": "^4.0.2",
//     "nsp": "^2.6.3",
//     "open": "0.0.5",
//     "postcss": "^5.2.16",
//     "postcss-cli": "^3.0.0",
//     "pug": "^2.0.0-beta11",
//     "pug-cli": "^1.0.0-alpha6",
//     "rimraf": "^2.6.1",
//     "uglify-js": "^2.8.15",
//     "uglifycss": "0.0.25",
//     "watch": "^1.0.2",
//     "webpack": "^2.3.2"
//   },
//   "dependencies": {
//     "onoffcanvas": "^1.1.2"
//   }
// }
