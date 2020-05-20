window.addEventListener('load', start);
var red, green, blue, redText, greenText, blueText;

function start() {
  red = document.querySelector('#red');
  green = document.querySelector('#green');
  blue = document.querySelector('#blue');

  red.value = 0;
  green.value = 0;
  blue.value = 0;

  redText = document.querySelector('#redText');
  red.addEventListener('input', update);

  greenText = document.querySelector('#greenText');
  green.addEventListener('input', update);

  blueText = document.querySelector('#blueText');
  blue.addEventListener('input', update);
  update();
}

function update() {
  var square = document.querySelector('#square');
  var color = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
  square.style.backgroundColor = color;
  redText.value = red.value;
  greenText.value = green.value;
  blueText.value = blue.value;
}
