import express from 'express';
import path from 'path';
import logger from 'morgan';
import browserSync from 'browser-sync';

const port = process.env.PORT || 3000;
const app = express();

// Use pug
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../src')));

let routes = ['index', 'review', 'search', 'receipt'];
for( let route of routes) {
  if(route === 'index') {
    app.get('/', (req, res) => {
      res.render(path.join(__dirname, '../src/pug/'+ route));
    });
  } else {
    app.get('/'+route, (req, res) => {
      res.render(path.join(__dirname, '../src/pug/'+ route));
    });
  }
}

app.listen(port, err => {
  browserSync({
    proxy: 'localhost:' + port,
    files: [path.join(__dirname, '../src/**')]
  });
  // (err) ? console.log(err) : open('http://localhost:' + port)
  (err) ? console.log(err) : '';
});
