var navbar = document.getElementById("navigationbar");
var navIcon = document.getElementsByClassName("nav-icon");
var caretUp = document.getElementById("caret-up");
var caretDown = document.getElementById("caret-down");

function fixNavbar() {
    if (navbar.classList.contains("bg-light", "navbar-light")) {
      setTimeout(fixNavbar2, 300);
    } 
    else if (!navbar.classList.contains("bg-light", "navbar-light")) {
        navbar.classList.add("bg-light", "navbar-light");
        for (var i = 0; i < navIcon.length; i++) {
          navIcon[i].style.color = "black";
        };
        caretUp.style.display = "inline";
        caretDown.style.display = "none";
    }    
}

function fixNavbar2() {
  navbar.classList.remove("bg-light", "navbar-light");
        for (var i = 0; i < navIcon.length; i++) {
          navIcon[i].style.color = "white";
        }
        caretUp.style.display = "none";
        caretDown.style.display = "inline";
}

