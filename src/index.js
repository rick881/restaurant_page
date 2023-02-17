import { loadInitialPage } from './home.js'
import { renderMenu } from './menu.js'
import { renderAboutPage } from './about.js'

initialize();

function addNavigation() {
    const home = document.querySelector('.home');
    const menu = document.querySelector('menu');
    const about = document.querySelector('.about');

    home.addEventListener('click', loadInitialPage);
    menu.addEventListener('click', renderMenu);
    about.addEventListener('click', renderAboutPage);

}

function initialize() {
    loadInitialPage();
    renderMenu();
    renderAboutPage();
}
