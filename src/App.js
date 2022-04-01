import React from 'react';
import Navbar from '/components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Contact from './Pages/contact';
import SignUp from './Pages/signup';
import SignIn from './Pages/signin';
import RouteMapMini from './RouteMapMini';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={RouteMapMini.IndexPage} exact element={<Home />} />
        <Route path={RouteMapMini.AboutPage} element={<About />} />
        <Route path={RouteMapMini.ContactPage} element={<Contact />} />
        <Route path={RouteMapMini.SigninPage} element={<SignIn />} />
        <Route path={RouteMapMini.SignupPage} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
