
export function renderMenu (){
    const content1 = document.getElementById('content');
    content1.appendChild(menu) //CONTENT DIV APEND SECTION

    // SECTION ELEMENT
    const menu = document.createElement('section');
    menu.classList.add('menu-items');
    menu.appendChild(title) //SECTION APPEND DIV

    // DIV ELEMENT
    const title = document.createElement('div');
    title.classList.add('menu-header');
    title.appendChild(menuTitle) //DIV APPEND H1

    //H1 ELEMENT
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.innerText = 'Our Menu';

    const item = document.createElement('article');
    item.classList.add('our-menus');
    
    const itemImg = document.createElement('img');
    itemImg.classList.add('menu-photo');
    itemImg.setAttribute('src', '../src/assets/italian.jpg');
    itemImg.setAttribute('alt', 'menu-item');

    const desc = doscument.createElement('div');
    desc.classList.add('menu-description');

    const info = document.createElement('div');
    info.classList.add('info');

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.innerText = 'BlueBerry Pancakes';
    const head3 = document.createElement('h3');
    h3.classList.add('price');
    h3.innerText = '13.99';

    const detail = document.createElement('div');
    detail.classList.add('detail');

    const p = document.createElement('p');
    p.innerText = 'BlueBerry Pancakes';

    menu.appendChild(item)
    item.appendChild(itemImg);
    item.appendChild(desc);
    desc.appendChild(info)
    desc.appendChild(detail)
    info.appendChild(h3)
    info.appendChild(head3)
    detail.appendChild(p);
content1.appendChild(menu) //CONTENT DIV APEND SECTION

};