const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;





  function init(e) {
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
  
document.body.addEventListener('keydown', function init(e));


function init(e) {
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
  
document.body.addEventListener('keydown', init); //place in function init; addEventListener will take an anonymous callback function where e, the event, is passed in as an argument. So you just need to refactor.