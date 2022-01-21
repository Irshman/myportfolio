const links = document.querySelectorAll(".sidebar__link");

links.forEach((item) => {
    item.addEventListener('click', (e) => {
        item.classList.add('sidebar__link--active');
    })
})