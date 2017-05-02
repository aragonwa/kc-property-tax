import express from 'express';
import path from 'path';
// import open from 'open'
import logger from 'morgan';
// import livereload from 'livereload'
import browserSync from 'browser-sync';

const port = process.env.PORT || 3000;
const app = express();

// Use pug
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../src')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../src/pug/indexPage'));
});

app.get('/review', (req, res) => {
  res.render(path.join(__dirname, '../src/pug/reviewPage'));
});

app.get('/search', (req, res) => {
  res.render(path.join(__dirname, '../src/pug/searchPage'));
});

app.listen(port, err => {
  browserSync({
    proxy: 'localhost:' + port,
    files: [path.join(__dirname, '../src/**')]
  });
  // (err) ? console.log(err) : open('http://localhost:' + port)
  (err) ? console.log(err) : '';
});

// const server = livereload.createServer({exts: 'pug'})
// server.watch(__dirname + '../src')
