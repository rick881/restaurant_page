
export const renderMenu = (() => {
    const content = document.getElementById('content');
    const menu = document.createElement('section');
    menu.classList.add('menu-items');

    const title = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.classList.add('menu-head');
    h1.innerText = 'Our Menu';
    title.appendChild(h1);
    menu.appendChild(title);
    menu.innerHTML = `<article class="our-menus">
    <img src="../src/assets/italian.jpg" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Blueberry Pancake</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>
<article class="our-menus">
    <img src="../src/assets/nuggets.jpeg" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Blueberry Pancake</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>
<article class="our-menus">
    <img src="../src/assets/cake.jpg" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Blueberry Pancake</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>
<article class="our-menus">
    <img src="../src/assets/malay-laksa-sh.jpg" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Blueberry Pancake</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>
<article class="our-menus">
    <img src="../src/assets/pancake.png" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Pancake</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>
<article class="our-menus">
    <img src="../src/assets/pasta.png" class="meu-photo" alt="menu item">
    <div class="menu-description">
        <div class="info">
            <h3 class="title">Pasta</h3>
            <h3 class="price">13.99</h3>
            <div class="line"></div>
        </div>
        <div class="detail">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dolore aliquam ab.</p>
        </div>
    </div>
</article>`

content.appendChild(menu)

});