const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const ul = nav.childNodes[5];
const links = document.querySelectorAll('li');
const logo = document.querySelector('.logo');


// Links add active class
links.forEach((link) => {
    link.addEventListener('click', (e) => {

        // Remove class 'active' for every a
        links.forEach(a => {
            a.classList.remove('active')
        });

        // The Add class 'active' to the current target a
        e.currentTarget.classList.add('active');
    });
});


// Toggle bar
toggle.addEventListener('click', function(){
    'use strict;'
  
    this.classList.toggle('active-nav');
    nav.classList.toggle('active-nav');
    logo.classList.toggle('active-logo');
});



  // Smoth Scroll
  function goToID(id) {
      document.querySelector(id).scrollIntoView({
          behavior: 'smooth'
      });
  }


  // ScrollUp
  let scrollUp = document.querySelector('.scrollup');
  // Show & Hide TOP button
  window.onscroll = function () {
    'use strict';

    if (window.pageYOffset >= 600) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none'
    }
  }

  // Scroll to 0px from the TOP
  function goToPixel(pix) {
      window.scroll({
        top: pix,
        left: 0,
        behavior: 'smooth'
      });
  }

  scrollUp.addEventListener("click", function goToPixel(pix) {
      pix = 0;
      window.scroll({
        top: pix,
        left: 0,
        // top: 0,
        behavior: 'smooth'
      });
    }
  );


    



