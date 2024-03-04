const backButton = document.querySelector('.to-top-button');
backButton.addEventListener('click', () => {
    document.querySelector('body,html').getBoundingClientRect().top;
    window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
})


