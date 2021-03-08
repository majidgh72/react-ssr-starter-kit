import View from './View';

const routes = [
  {
    component: () => View("Home"),
    path: "/",
    exact: true
  },
  {
    component: () => View("About"),
    path: "/about",
  },
];

export default routes;