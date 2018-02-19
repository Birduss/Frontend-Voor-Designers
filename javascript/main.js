var button = document.querySelector('.meerinfo');
var button2 = document.querySelector('.meerinfo2');
var dropdown = document.querySelector('.info');
var dropdown2 = document.querySelector('.info2');
var tussenruimte = document.querySelector('.ruimte');
var pijltje = document.querySelector('.pijltje');
var pijltje2 = document.querySelector('.pijltje2');



button.addEventListener('click', voegclasstoe)

function voegclasstoe(){
//    console.log('click');
    dropdown.classList.toggle('deinfo');
    tussenruimte.classList.toggle('vervangruimte');
    pijltje.classList.toggle('omgedraaid');
}

button2.addEventListener('click', voegclasstoe2)

function voegclasstoe2(){
//    console.log('click');
    dropdown2.classList.toggle('deinfo2');
    pijltje2.classList.toggle('omgedraaid2');
}




// scroll code //

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("onzichtbaar").className = "verschijn";
    } else {
        document.getElementById("onzichtbaar").className = "";
    }
}

// scroll code //









