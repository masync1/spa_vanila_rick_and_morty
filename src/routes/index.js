import header from '../templates/header'
import home from '../pages/home'
import error404 from '../pages/error404'
import characters from '../pages/characters'

const routes = {
    '/': home,
    '/:id': characters,
    '/contact': 'Contact',
}

const router = async () => {
    const _header = null || document.getElementById('header')
    const _content = null || document.getElementById('content')

    _header.innerHTML = await header()

}

export default router