document.getElementById('submit').addEventListener('click', doStuff);

function doStuff(event) {
  // Get rid of the input box so that the user can't change anything
document.getElementById('input').classList.add("hide");

  
  // Getting the result from the radio check list
  const array = document.getElementsByName('colors');

  for (i = 0; i < array.length; i++) {
      if (array[i].checked)
          result = array[i].value;
  }

  // Changing the object to the color selected and displaying it;
  const circle = document.getElementById("Animation");

  circle.style.backgroundColor = result;

  circle.classList.remove("hide");

  // Moving the circle across the screen like an animation
  var id = null;
  var elem = document.getElementById("Animation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == 100) {
      clearInterval(id);

      // Clears the circle and displays the submit button
      circle.classList.add("hide");
            document.getElementById('input').classList.remove("hide");
      
    } else {
      pos++;  
      elem.style.left = pos + '%'; 
    }
}
  
}