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

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);

}