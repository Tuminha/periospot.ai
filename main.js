var demoButtons;

function start () {
  
  // Add event "click" to "demo buttons"
  demoButtons = document.querySelectorAll ('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  
  // Add event "click" to "save buttons"
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
  
}

// Toggle "effect" classes
function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  
  toggleActive.call (this);
}

// Toggle "active" class
function toggleActive () {
  this.classList.toggle ('active');
}

// Invoke "start ()" function
window.addEventListener ('load', start);

// JS for the quote generator

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  
  // adjust the position of the background image
  $('.parallax').css('background-position', '0 ' + (scroll/2) + 'px');
  
  // adjust the opacity of the quote and the overlay
  if (scroll < 500) {  // adjust this value as needed
    $('.quote').css('opacity', scroll/500);
    $('.overlay').css('opacity', scroll/1000);  // adjust this value as needed
  }
});

