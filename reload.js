const refreshButton = document.querySelector('.home--page');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)