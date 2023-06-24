//your JS code here. If required.
window.onload = function() {
  var targetElement = document.getElementById('level');
  var domLevel = getDOMLevel(targetElement);
  alert('The level of the element is: ' + domLevel);
};

function getDOMLevel(element) {
  var level = 0;
  var currentElement = element;

  while (currentElement.parentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  return level;
}