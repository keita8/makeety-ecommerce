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

});