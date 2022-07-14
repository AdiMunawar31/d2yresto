import Home from '../views/pages/home';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/about': About,
};

export default routes;
