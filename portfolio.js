
addEventListener('DOMContentLoaded',() => {
    const btnMenu = document.querySelector('.btn-menu')
    if (btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.querySelector('.menu-items')
            menuItems.classList.toggle('show')

        })
    }
})

let js = document.getElementById("js");
let css = document.getElementById("css");
let html = document.getElementById("html");
let net = document.getElementById("net");
let skillName = document.getElementById("skillName");

js.addEventListener('mouseover', ()=>{
    skillName.textContent = "Javascript";
})
js.addEventListener('mouseout', ()=>{
    skillName.textContent = "";
})


css.addEventListener('mouseover', ()=>{
    skillName.textContent = "CSS3";
})
css.addEventListener('mouseout', ()=>{
    skillName.textContent = "";
})

html.addEventListener('mouseover', ()=>{
    skillName.textContent = "HTML5";
})
html.addEventListener('mouseout', ()=>{
    skillName.textContent = "";
})

net.addEventListener('mouseover', ()=>{
    skillName.textContent = ".NET";
})
net.addEventListener('mouseout', ()=>{
    skillName.textContent = "";
})