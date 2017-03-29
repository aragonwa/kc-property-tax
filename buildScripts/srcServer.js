import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import logger from 'morgan';
import livereload from 'livereload';

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

// Use pug
app.set('view engine', 'pug');
app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, '../src/')));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../src/pug/index'));
});

app.listen(port, err => {
  (err) ? console.log(err) : open('http://localhost:' + port);
});

const server = livereload.createServer({exts: 'pug'});
server.watch(__dirname + '../src');;

