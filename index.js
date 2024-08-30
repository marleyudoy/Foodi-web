const hamBurger = document.getElementById("ham_btn")
const hamMenu = document.getElementById("ham_menu")

hamBurger.addEventListener('click',show_hamburger)

let a = false;
function show_hamburger(){
  if(a){
    hamMenu.style.display = "flex"
    a = false
  }else{
    hamMenu.style.display = "none"
    a = true
  }
}