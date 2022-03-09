const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.subheader-nav');
menu.addEventListener('mouseover', function(e){
    let lines = document.querySelectorAll('.mobile-menu-line');
    lines.forEach((el) => {
        el.style.background = '#7E9B49';
    })
    let cssMenu = {
        'position': 'absolute', 
        'right' : '0',
        'top' : '35px',
        'background' : 'rgba(0,0,0,0.6)',
        'display' : 'flex',
        'flex-direction' : 'column',
        'order' : '5',
        'height' : '170px',
        'z-index' : '3',
        'padding' : '5px'
    }
    $(".subheader").css('position','relative');
    $(nav).css(cssMenu);
    $("nav a").css('color','#fff');
});
menu.addEventListener('mouseout', function(e){
    let lines = document.querySelectorAll('.mobile-menu-line');
    lines.forEach((el) => {
        el.style.background = '#000';
    })
    nav.style.display = 'none';
});

nav.addEventListener('mouseover', function(e){
    if ($(menu).css('display') == 'flex'){
        nav.style.display = 'flex';}
})

nav.addEventListener('mouseout', function(e){
    if ($(menu).css('display') == 'flex'){
        nav.style.display = 'none';
    }
})
