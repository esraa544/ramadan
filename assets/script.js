'use strict';

/*========== Modal variables ==========*/

const modal = document.querySelector('.modal');

/*========== overlayer variable ==========*/

const overlay = document.querySelector('.overlay');

/*========== CloseModal button variables ==========*/

const btnCloseModal = document.querySelector('.close-modal');
/*========== OpenModal button variables ==========*/

const btnsOpenModal = document.querySelector('.open-modal');
/*========== openModal function ==========*/

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

/*========== closeModal function ==========*/

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

/*========== OpenModal button onclick ==========*/

btnsOpenModal.addEventListener('click', openModal);
/*========== closeModal button onclick ==========*/

btnCloseModal.addEventListener('click', closeModal);
/*========== overlayer onclick ==========*/

overlay.addEventListener('click', closeModal);

/*========== keydown function ==========*/

document.addEventListener('keydown', function(e) {

    if (e.key === 'Escape') {
        closeModal();
    }
});