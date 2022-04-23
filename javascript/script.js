const topNav = document.getElementById('topNav');
const scrolables = document.getElementsByClassName('scrollable');
const projectsTopNav = document.getElementsByClassName('projects_top_nav');
function changeTheme(theme) {
    document.body.classList.toggle(theme + "_body");
    topNav.classList.toggle(theme + "_topnav");
    for (let i = 0; i < scrolables.length; i++) {
        scrolables[i].classList.toggle(theme + "_scrollable");
        projectsTopNav[i].classList.toggle(theme + "_projectsTopNav");
    }
}
// changeTheme("darkmode");