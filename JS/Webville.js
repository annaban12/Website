
function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;

var loc = window.location.href;
var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                      loc + '?profile=css3';
document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}
window.onload = init;

function handleButtonClick() {
  var textInput = document.getElementById("songTextInput");
  var songName = textInput.value;
  if (songName == "") {
    alert("Please enter a song");
  }
  if (songName == "") {
    var li=document.createElement("")
  }
  var li=document.createElement("li");
  li.innerHTML = songName;
  var ul = document.getElementById("playlist");
  ul.appendChild(li);
}



