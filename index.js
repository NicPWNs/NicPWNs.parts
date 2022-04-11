function darkMode()
{
    var property = document.getElementById("togglers");
        if (property.className !== 'toggled') {
            property.className = 'toggled'
        }
        else {
            property.className = '';
        }

    var property = document.getElementsByClassName("button")[0];
        if (property.className !== 'toggled') {
            property.className = 'toggled'
        }
        else {
            property.className = '';
        }
}

var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") });
}