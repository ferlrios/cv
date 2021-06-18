addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".btn-menu");
  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      const menuItems = document.querySelector(".menu-items");
      menuItems.classList.toggle("show");
    });
  }
});

let showSkill = (skill) => {
  $("#skillName").text(skill);
};

let añadeEvento = (element) => {
  let id = element.id;
  $(`#${id}`).on({
    mouseenter: function () {
      showSkill(element.id.toString());
    },
    mouseleave: function () {
      showSkill("");
    },
  });
};

const logosSkills = document.querySelectorAll(".grid-item");
logosSkills.forEach((element) => añadeEvento(element));
