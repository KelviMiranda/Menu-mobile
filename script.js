const btnMobile = document.getElementById('menu_mobile');
const navMenu = document.querySelector(".navMenu");

btnMobile.addEventListener("click", e => {
    e.preventDefault();
    navMenu.classList.contains("active") ? navMenu.classList.remove("active"): navMenu.classList.add("active")
});

const targetLink = document.querySelector("#navList");
targetLink.addEventListener("click", (e) => {
    const { target } = e;

    console.log(target.getAttribute("class"));
    console.log(target.innerText);
})