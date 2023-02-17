export function renderAboutPage () {
    const content = document.getElementById('content');
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutUs = document.createElement('p')
    aboutUs.classList.add('menu-title');
    aboutUs.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab'
    about.appendChild(aboutUs);

    content.appendChild(about);
}; 