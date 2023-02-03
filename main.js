const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let index = 0; index < triggerOpen.length; index++) {
    let currentId = triggerOpen[index].dataset.target,
        targetEl = document.querySelector(`#${currentId}`)

    console.log(targetEl);
    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
        console.log(overlay);
    };

    triggerOpen[index].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });


    // targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
    console.log(overlay);

}

// MOBILE
// const submenu = document.querySelectorAll('.child-trigger');
// submenu.forEach((menu) => menu.addEventListener('click', function(e) {
//     e.preventDefault();
//     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
//     if (this.closest('.has-child').classList != 'active') {
//         this.closest('.has-child').classList.toggle('active');
//     }

// }))



const swiper = new Swiper('.sliderbox', {
    // Optional parameters

    loop: true,
    effect: 'fade',
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        // disableOnInteraction: true,
    },

});