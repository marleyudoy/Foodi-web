const hamBurger = document.getElementById("ham_btn")
const hamMenu = document.getElementById("ham_menu")

hamBurger.addEventListener('click',show_hamburger)

let a = false;
function show_hamburger(){
  if(a){
    hamMenu.style.left = "105%"
    a = false
  }else{
    hamMenu.style.left = "-6%"
    a = true
  }
}