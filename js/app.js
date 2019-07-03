"use strict";
import {home} from './home';
import {about} from './about';
import {contact} from './contact';

const routes = {
  "https://altugozengi.github.io/VanillaJS-SPA-App/": home,
  "https://altugozengi.github.io/VanillaJS-SPA-App/about": about,
  "https://altugozengi.github.io/VanillaJS-SPA-App/contact": contact
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