const header = document.querySelector("header")

/*-------------STICKY NAVBAR-------------*/
function stickyNavbar(){
  header.classList.toggle("scrolled", window.pageYOffset > 0)
}
stickyNavbar()

window.addEventListener("scroll", stickyNavbar);
