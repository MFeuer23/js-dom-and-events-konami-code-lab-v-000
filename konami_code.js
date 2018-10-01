const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;


function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

document.body.querySelector('input').addEventListener('keydown', init());

const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});