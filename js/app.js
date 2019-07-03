"use strict";
import {home} from './home';
import {about} from './about';
import {contact} from './contact';

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};