const triggerOpen = document.querySelectorAll(['trigger-button']);
const triggerClose = document.querySelectorAll(['close-button']);
const overlay = document.querySelector(['data-overlay']);


for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
        targetEl = document.querySelector(`#{ currentId }`)

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    })
    console.log(openData);
    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);

}




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

    loop: true,
    autoplay: {
        delay: 3000,
    },

});

const caroussel = new Swiper('.carouselbox', {
    // Optional parameters

    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,

    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },

    breakpoints: {
        481: {
            slidePerView: 2,
            // slidePerGroup: 1,
            centeredSlides: false
        },
        640: {
            slidePerView: 3,
            // slidePerGroup: 3,
            centeredSlides: false
        },
        992: {
            slidePerView: 4,
            // slidePerGroup: 4,
            centeredSlides: false
        },
    },


    // loop: true,
    // autoplay: {
    //     delay: 3000,
    // },

});





//

// const triggerOpen = document.querySelectorAll('[trigger-button]');
// const triggerClose = document.querySelectorAll('[close-button]');
// const overlay = document.querySelector('[data-overlay]');

// for (let index = 0; index < triggerOpen.length; index++) {
//     let currentId = triggerOpen[index].dataset.target,
//         targetEl = document.querySelector(`#${currentId}`)

//     console.log(targetEl);
//     const openData = function() {
//         targetEl.classList.remove('active');
//         overlay.classList.remove('active');
//         console.log(overlay);
//     };

//     triggerOpen[index].addEventListener('click', function() {
//         targetEl.classList.add('active');
//         overlay.classList.add('active');
//     });


//     // targetEl.querySelector('[close-button]').addEventListener('click', openData);
//     overlay.addEventListener('click', openData);
//     console.log(overlay);

// }

// // MOBILE
// // const submenu = document.querySelectorAll('.child-trigger');
// // submenu.forEach((menu) => menu.addEventListener('click', function(e) {
// //     e.preventDefault();
// //     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null);
// //     if (this.closest('.has-child').classList != 'active') {
// //         this.closest('.has-child').classList.toggle('active');
// //     }

// // }))



// const caroussel = new Swiper('.sliderbox', {
//     // Optional parameters

//     spaceBetween: 30,
//     slidePerView: 'auto',
//     centeredSlides: true,

//     // If we need pagination

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         481: {
//             slidePerView: 2,
//             slidePerGroup: 1,
//             centeredSlides: false
//         },
//         640: {
//             slidePerView: 3,
//             slidePerGroup: 3,
//             centeredSlides: false
//         },
//         992: {
//             slidePerView: 4,
//             slidePerGroup: 4,
//             centeredSlides: false
//         },
//     },

// });
// const swiper = new Swiper('.caroussel', {
//     // Optional parameters

//     loop: true,
//     effect: 'fade',
//     autoHeight: true,


//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

// });