const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;




const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    console.log('default prevented');
    return e.preventDefault();
  } else {
    console.log('Not a "g"');
  }
});