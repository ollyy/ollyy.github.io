var image = document.getElementsByClassName('img-parallax');
new simpleParallax(image, {
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});

var image = document.getElementsByClassName('img-pan_right');
new simpleParallax(image, {
  orientation: 'right'
});

var image = document.getElementsByClassName('img-pan_left');
new simpleParallax(image, {
  orientation: 'left'
});