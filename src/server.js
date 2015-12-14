/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import adminApi from './api/adminApi';
import transferSchoolsApi from './api/transferSchoolsApi';
import transferSchoolCoursesApi from './api/transferSchoolCoursesApi';
import registerStudentApi from './api/registerStudentApi';
import creditReportApi from './api/creditReportApi';
import newCourseApi from './api/newCourseApi';
var passport = require('passport');
var session = require('express-session');

var authenticate = require('./authenticate')(passport);

const server = global.server = express();

server.set('port', (process.env.PORT || 5000));

server.use(express.static(path.join(__dirname, 'public')));
server.use(session({
    secret: 'HELLO PABLO'
}));

server.use(passport.initialize());
server.use(passport.session());

/// Initalize passport
var initPassport = require('./passport-init');
initPassport(passport);
//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/adminApi', adminApi);
server.use('/api/getTransferSchools', transferSchoolsApi);
server.use('/api/postRegisterStudent', registerStudentApi);
server.use('/api/getCreditReport', creditReportApi);
server.use('/api/getTransferSchoolCourses', transferSchoolCoursesApi);
server.use('/api/content', require('./api/content'));
server.use('/auth', authenticate);
server.use('/api/newCourse', newCourseApi);
//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = template(data);
    res.status(statusCode).send(html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
