// MENU OPEN / CLOSE

function toggleMenu() {

  document
    .getElementById("menu")
    .classList
    .toggle("show");

}


// PAGE CHANGE

function showPage(pageName) {

  const pages =
    document.querySelectorAll(".page");


  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  document
    .getElementById(pageName)
    .classList
    .add("active");


  // Menu বন্ধ হবে

  document
    .getElementById("menu")
    .classList
    .remove("show");


  // Page-এর উপরে যাবে

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}
