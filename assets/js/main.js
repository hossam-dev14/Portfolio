const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const ul = nav.childNodes[5];
const li = document.querySelectorAll('li');
const logo = document.querySelector('.logo');


// toggle bar
toggle.addEventListener('click', function(){
    'use strict;'
    this.classList.toggle('active-nav');
    nav.classList.toggle('active-nav');
    logo.classList.toggle('active-logo');
    
    if (li[0].style.transform !== 'translateX(0%)') {
        setTimeout(() => {
            li.forEach(e => {
                e.style.transform = 'translateX(0%)';
                e.style.transitionDuration = '1.3s';
            });
        }, 50);
    } 
    else {
        
        // li.forEach(e => {
        //     e.style.transform = 'translateX(560%)';
        // }); 
    }

});




// document.body.onresize = function() {
//     li.forEach(e => {
//         e.style.transform = 'translateX(0%)';
//     });
// }

// const home = document.querySelector('#home');
// home.addEventListener('click', function(){
//     'use strict;'
//     if (this.classList == 'active') {

//     }
//     this.classList.remove('active');
//     nav.classList.remove('active');
// });


// Change color
// document.documentElement.style.setProperty(`--primary`, '#1f1');


const red = document.querySelector('#red');
red.addEventListener('click', e =>{
    const cssStyle = document.documentElement.style;
    cssStyle.setProperty('--primary', '#e00');
    cssStyle.setProperty('--primary-9', '#ffc2c2');
});

const aqua = document.querySelector('#aqua');
aqua.addEventListener('click', e =>{
    const cssStyle = document.documentElement.style;
    cssStyle.setProperty('--primary', '#0ff');
    cssStyle.setProperty('--primary-9', '#dff');
});

const fuchsia = document.querySelector('#fuchsia');
fuchsia.addEventListener('click', e =>{
    const cssStyle = document.documentElement.style;
    cssStyle.setProperty('--primary', '#f0f');
    cssStyle.setProperty('--primary-9', '#fdf');
});

const teal = document.querySelector('#teal');
teal.addEventListener('click', e =>{
    const cssStyle = document.documentElement.style;
    cssStyle.setProperty('--primary', '#008080');
    cssStyle.setProperty('--primary-9', '#85b8b8');
});

const springgreen = document.querySelector('#springgreen');
springgreen.addEventListener('click', e =>{
    const cssStyle = document.documentElement.style;
    cssStyle.setProperty('--primary', '#00ff7f');
    cssStyle.setProperty('--primary-9', '#cfe');
});












