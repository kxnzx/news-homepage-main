// SHOW MENU & SWITCH HAMBURGER ICON INTO CLOSE ICON WHEN HAMBURGER BUTTON IS CLICKED
// This tells the browser to pay attention to the following element:
const menu = document.querySelector(".mobile_menu");
const toggleButton = document.querySelector(".toggleButton");
const closeIcon = document.querySelector(".closeIcon");
const hamburgerIcon = document.querySelector(".hamburgerIcon");

// FUNCTION
function toggleMenu() {
  // If it's true that the menu class contains the showMenu class, do this:
  if (menu.classList.contains("showMenu")) {
    // Execute this block of code if the specified condition is true:
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
  // If it's false that the menu class contains the showMenu class, do this:
  else {
    // Execute this block of code if the specified condition is false:
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

// When the toggle button is clicked, the function toggleMenu() will be called, it will check if the menu contains the class showMenu
toggleButton.addEventListener("click", toggleMenu);
