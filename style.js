function mobileMenu() {
    var menu = document.getElementById("mobile-menu");
    
    if ( menu.style.display === "block" ) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }    
}


function tabContent(cityName) {
    var tab = document.getElementsByClassName("city");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }

