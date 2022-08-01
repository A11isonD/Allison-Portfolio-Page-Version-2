//function toggleMenu() {
  //  document.getElementById("primaryNav").classList.toggle("open");
//}

//let x = document.getElementById('hamburgerBtn');
//x.onclick = toggleMenu; 


//window.addEventListener(" ", function(e) {


//});


const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
    }
)) 