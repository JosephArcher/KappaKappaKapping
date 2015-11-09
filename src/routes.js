/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminPage from './components/AdminPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import CourseSelectionPage from './components/CourseSelection'; // Added Course Selection Page

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/profile', async () => <Profile />);

  on('/welcome', async () => <Welcome />);

  on('/register', async () => <RegisterPage />);

<<<<<<< HEAD
  on('/admin', async () => <AdminPage />);

  on('/courseselectionpage', async() => <CourseSelectionPage />);


=======
  on('/courseselectionpage', async() => <CourseSelectionPage />);

>>>>>>> master
  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
