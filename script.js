function applyAspectRatioStyles() {
    if (window.innerWidth > window.innerHeight) {
        document.body.classList.add('landscape');
        document.body.classList.remove('portrait');
    } else {
        document.body.classList.add('portrait');
        document.body.classList.remove('landscape');
    }
}

applyAspectRatioStyles();

window.addEventListener('resize', applyAspectRatioStyles);


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }