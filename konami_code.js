const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;




document.body.addEventListener('keydown', 
  function init(e) {
    const key = parseInt(e.detail || e.which);
    if (e.which === 71) {
      console.log('default prevented');
      return e.preventDefault();
    } else {
      console.log('Not a "g"');
  }
});