// ======== Sticky Navbar Starts ======= //
window.onscroll = function() {myFunction()};

const HEADER = document.getElementById("stickyHeader");
const STICKY = HEADER.offsetTop;

function myFunction() {
  if (window.pageYOffset > STICKY) {
    HEADER.classList.add("sticky");
  } else {
    HEADER.classList.remove("sticky");
  }
}

// ======== Sticky Navbar Ends ======= //