"use strict";
import {home} from './home';
import {about} from './about';
import {contact} from './contact';

const routes = {
  "/VanillaJS-SPA-App/": home,
  "/VanillaJS-SPA-App/about": about,
  "/VanillaJS-SPA-App/contact": contact
};

let content = document.getElementById('root');
let request = window.location.pathname || "VanillaJS-SPA-App/";
content.innerHTML = routes[request] ? routes[request] : Error404;

window.onpopstate = () => {
  content.innerHTML = routes[window.location.pathname];
};
