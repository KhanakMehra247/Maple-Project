let submenu = document.getElementsByClassName("submenu");
let background = document.getElementsByClassName("background");
let lists = document.getElementsByClassName("navLi");

for (const list of lists) {
  list.addEventListener("mouseenter", (e) => {
    closeOtherMenus()
    e.target.children[1].style.display = "flex"
    e.target.children[1].children[0].style.display ="flex"
  });
}

function closeOtherMenus(){
  for (const menu of submenu) {
    menu.style.display = "none";
  }
  for (const back of background) {
   back.style.display = "none";
  }
}

for (const menu of submenu) {
  menu.addEventListener("mouseleave", (e) => {
    e.target.parentElement.style.display = "none";
    menu.style.display = "none";
  });
}
