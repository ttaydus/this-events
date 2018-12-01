//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navBox = document.getElementsByClassName('navi');

for(i=0; i<navBox.length; i++){

navBox[i].addEventListener('click', dropDown);

}

function dropDown(){
    var childElem = this.querySelectorAll('.inner')[0];

    if(childElem.style.display === 'block'){
        childElem.style.display = 'none';
    }else{
        childElem.style.display = 'block';
    }
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var secretBox = document.getElementsByClassName('name');

for(i=0; i<secretBox.length; i++){
    secretBox[i].addEventListener('click', menuDrop);
}

function menuDrop(){
    var secretElem = this.querySelectorAll('.menu')[0];
    if(secretElem.style.display === 'block'){
        secretElem.style.display = 'none';
    }else{
        secretElem.style.display = 'block';
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



