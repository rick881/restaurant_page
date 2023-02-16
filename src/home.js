export function loadInitialPage() {
    const content = document.getElementById('content');
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    content.appendChild(welcome);
    
    const head1 = document.createElement('h1');
    head1.innerText = 'COME ONE COME ALL';
    welcome.appendChild(head1);
    
    const head2 = document.createElement('h2');
    head2.innerText = 'All you can eat';
    welcome.appendChild(head2);

}