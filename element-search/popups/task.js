const modalMain = document.querySelector('#modal_main');
const closeModal = document.querySelectorAll('.modal__close_times');
const showSuccess = document.querySelector('.show-success');
const showSuccessActive = document.querySelector('#modal_success');

const close = () => {
    for (let i = 0; i < closeModal.length; i++) {
        closeModal[i].onclick = () => {
            modalMain.classList.remove('modal_active');
            showSuccessActive.classList.remove('modal_active')
        }
    }
}

close()

modalMain.classList.add('modal_active');

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    showSuccessActive.classList.add('modal_active');
}