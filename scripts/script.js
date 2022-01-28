const links = document.querySelectorAll(".sidebar__link");
const about = document.querySelector(".about");
const work = document.querySelector(".works");
const skills = document.querySelector(".skills");

links.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(links);

        if(e.target.parentElement.id === "work") {
          about.style.display = "none";
          skills.style.display = "none";
          work.style.display = "flex";

          links.forEach(item => {
            item.classList.remove('sidebar__link--active');
          });

          e.target.parentElement.classList.add('sidebar__link--active');
        }

        if(e.target.parentElement.id === "about") {
          about.style.display = "flex";
          work.style.display = "none";
          skills.style.display = "none";

          links.forEach(item => {
            item.classList.remove('sidebar__link--active');
          });

          e.target.parentElement.classList.add('sidebar__link--active');
        }

        if(e.target.parentElement.id === "skills") {
          about.style.display = "none";
          work.style.display = "none";
          skills.style.display = "flex";

          links.forEach(item => {
            item.classList.remove('sidebar__link--active');
          });

          e.target.parentElement.classList.add('sidebar__link--active');
        }
    })
})

