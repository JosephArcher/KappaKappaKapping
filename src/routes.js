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
import AboutPage from './components/AboutPage';
import CourseSelectionPage from './components/CourseSelectionPage'; // Added Course Selection Page
import CreditReportPage from './components/CreditReportPage'; // Added Credit Report Page

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

  on('/admin', async () => <AdminPage />);

  on('/courseselectionpage', async() => <CourseSelectionPage/>);
  
   on('/creditreportpage', async(req) => {
    const content = await http.get(`/api/getCreditReport`);
    console.log(content);
    return <CreditReportPage CompletedCourses={content} />;
  });

  on('/aboutpage', async() => <AboutPage/>);

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
