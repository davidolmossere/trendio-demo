(function () {
  
  // Const & Var
  const hamburger = document.querySelector('.hamburger');
  const navBar = document.querySelector('.nav-bar');
  const navBarWrapper = document.querySelector('.nav-bar-wrapper');

  // Methods
  var clickBurger = function (event) {
    hamburger.parentNode.parentNode.classList.toggle('open');
    if (navBarWrapper.style.display === "none") {
      navBarWrapper.style.display = "flex";
    } else {    
      navBarWrapper.style.display = "none";
    }
  };

  // Event Listeners
  [hamburger, navBar].forEach(item => {
    item.addEventListener('click', clickBurger);
  })

})();