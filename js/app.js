"use strict";
import {home} from './home';
import {about} from './about';
import {contact} from './contact';

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact
};

let content = document.getElementById('root');
let request = window.location.pathname || "/";
content.innerHTML = routes[request] ? routes[request] : Error404;

window.onpopstate = () => {
  content.innerHTML = routes[window.location.pathname];
};


// const rootDiv = document.getElementById("root");
// rootDiv.innerHTML = routes[window.location.pathname];

// const onNavigate = pathname => {
//   window.history.pushState({}, pathname, window.location.origin + pathname);
//   rootDiv.innerHTML = routes[pathname];
// };

// window.onpopstate = () => {
//   rootDiv.innerHTML = routes[window.location.pathname];
// };