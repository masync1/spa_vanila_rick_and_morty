import header from '../templates/header';
import home from '../pages/home';
import character from '../pages/characters';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': home,
  '/:id': character,
  '/contact': 'Contact',
};

const router = async () => {
  const _header = null || document.getElementById('header');
  const _content = null || document.getElementById('content');

  _header.innerHTML = await header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : error404;
  _content.innerHTML = await render();
};

export default router;