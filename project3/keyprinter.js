var keycode = document.querySelector("#keycode");

function getHexCode() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("keypress", function() {
    var x = event.keyCode;
    if ( x === 13){
        keycode.innerHTML = "You pressed: <span class='keyname'>Enter</span> and the keycode was: <span class='keycode'>13</span>";
    }else if (x === 32) {
        keycode.innerHTML = "You pressed: <span class='keyname'>Space Bar</span> and the keycode was: <span class='keycode'>32</span>";
    }else{
        var y = String.fromCharCode(x);
        keycode.innerHTML = "You pressed: <span class='keyname'>" + y+ "</span> and the keycode was: <span class='keycode'>" + x + "</span>";
    }

    document.body.style.background = getHexCode();

});
