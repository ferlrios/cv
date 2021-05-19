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

$("#js").on({
  mouseenter: function () {
    showSkill("JavaScript");
  },
  mouseleave: function () {
    showSkill("");
  },
});

$("#css").on({
  mouseenter: function () {
    showSkill("CSS");
  },
  mouseleave: function () {
    showSkill("");
  },
});

$("#html").on({
  mouseenter: function () {
    showSkill("HTML");
  },
  mouseleave: function () {
    showSkill("");
  },
});

$("#net").on({
  mouseenter: function () {
    showSkill(".NET");
  },
  mouseleave: function () {
    showSkill("");
  },
});
