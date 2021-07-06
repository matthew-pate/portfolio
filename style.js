const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function prodsupportFunction() {
  let prodsupportdots = document.getElementById("prodsupportdots");
  let prodsupportText = document.getElementById("moreprodsupport");
  let prodsupportbtnText = document.getElementById("prodsupportBtn");

  if (prodsupportdots.style.display === "none") {
    prodsupportdots.style.display = "inline";
    prodsupportbtnText.innerHTML = "Read more";
    prodsupportText.style.display = "none";
  } else {
    prodsupportdots.style.display = "none";
    prodsupportbtnText.innerHTML = "Read less";
    prodsupportText.style.display = "inline";
  }
}

function csFunction() {
  let csdots = document.getElementById("csdots");
  let csText = document.getElementById("morecs");
  let csbtnText = document.getElementById("csBtn");

  if (csdots.style.display === "none") {
    csdots.style.display = "inline";
    csbtnText.innerHTML = "Read more";
    csText.style.display = "none";
  } else {
    csdots.style.display = "none";
    csbtnText.innerHTML = "Read less";
    csText.style.display = "inline";
  }
}

function semFunction() {
  let semdots = document.getElementById("semdots");
  let semText = document.getElementById("moresem");
  let sembtnText = document.getElementById("semBtn");

  if (semdots.style.display === "none") {
    semdots.style.display = "inline";
    sembtnText.innerHTML = "Read more";
    semText.style.display = "none";
  } else {
    semdots.style.display = "none";
    sembtnText.innerHTML = "Read less";
    semText.style.display = "inline";
  }
}
function appleFunction() {
  let appledots = document.getElementById("appledots");
  let appleText = document.getElementById("moreapple");
  let applebtnText = document.getElementById("appleBtn");

  if (appledots.style.display === "none") {
    appledots.style.display = "inline";
    applebtnText.innerHTML = "Read more";
    appleText.style.display = "none";
  } else {
    appledots.style.display = "none";
    applebtnText.innerHTML = "Read less";
    appleText.style.display = "inline";
  }
}


function ldFunction() {
  let lddots = document.getElementById("lddots");
  let ldText = document.getElementById("moreld");
  let ldbtnText = document.getElementById("ldBtn");

  if (lddots.style.display === "none") {
    lddots.style.display = "inline";
    ldbtnText.innerHTML = "Read more";
    ldText.style.display = "none";
  } else {
    lddots.style.display = "none";
    ldbtnText.innerHTML = "Read less";
    ldText.style.display = "inline";
  }
}

function minacsFunction() {
  let minacsdots = document.getElementById("minacsdots");
  let minacsText = document.getElementById("moreminacs");
  let minacsbtnText = document.getElementById("minacsBtn");

  if (minacsdots.style.display === "none") {
    minacsdots.style.display = "inline";
    minacsbtnText.innerHTML = "Read more";
    minacsText.style.display = "none";
  } else {
    minacsdots.style.display = "none";
    minacsbtnText.innerHTML = "Read less";
    minacsText.style.display = "inline";
  }
}