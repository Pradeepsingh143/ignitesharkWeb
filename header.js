// main header starts
class header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header class="flex-container" id="navHeader">
        <div class="flex-item" id="logo-col">
          <a href="/index.html"><img id="logo" src="/img/logo-white.png" alt="Logo"/></a>
        </div>    
        <nav class="flex-item" id="navbar">
          <ul class="menu-items" id="nav-menu">
            <li class="menu-item"><a href="/index.html">Home</a></li>
            <li class="menu-item"><a href="/about_us.html">About</a></li>
            <li class="menu-item"><a href="#">Services</a></li>
            <li class="menu-item"><a href="#">Portfolio</a></li>
            <li class="menu-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <!-- mobile menu  -->
        <nav class="mobileMenu" id="mobile-menu" hidden>
          <ul class="hamburger">
             <li class="mobile-menu-item"><a href="/index.html">Home</a></li>
            <li class="mobile-menu-item"><a href="/about_us.html">About</a></li>
            <li class="mobile-menu-item"><a href="#">Services</a></li>
            <li class="mobile-menu-item"><a href="#">Portfolio</a></li>
            <li class="mobile-menu-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
          <a class="icon">
          <i onclick="mobileMenu()" class="fa fa-bars"></i></a>
        <div class="flex-item" id="loginBtn"><a href="#" class="btn-primary">login</a></div>
      </header>`
    }
    }
    
    customElements.define('my-header', header)

// main header end