/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var button = document.querySelector('.meerinfo');
var button2 = document.querySelector('.meerinfo2');
var button3 = document.querySelector('.meerinfo3');
var dropdown = document.querySelector('.info');
var dropdown2 = document.querySelector('.info2');
var dropdown3 = document.querySelector('.info3');
var tussenruimte = document.querySelector('.ruimte');
var tussenruimte2 = document.querySelector('.ruimte2');
var tussenruimte3 = document.querySelector('.ruimte3');
var pijltje = document.querySelector('.pijltje');
var pijltje2 = document.querySelector('.pijltje2');
var pijltje3 = document.querySelector('.pijltje3');


button.addEventListener('click', voegclasstoe);

function voegclasstoe() {
    //    console.log('click');
    dropdown.classList.toggle('deinfo');
    tussenruimte.classList.toggle('vervangruimte');
    pijltje.classList.toggle('omgedraaid');
}




button2.addEventListener('click', voegclasstoe2);

function voegclasstoe2() {
    //    console.log('click');
    dropdown2.classList.toggle('deinfo2');
    tussenruimte2.classList.toggle('vervangruimte2');
    pijltje2.classList.toggle('omgedraaid2');
}

button3.addEventListener('click', voegclasstoe3);

function voegclasstoe3() {
    //    console.log('click');
    dropdown3.classList.toggle('deinfo3');
    tussenruimte3.classList.toggle('vervangruimte3');
    pijltje3.classList.toggle('omgedraaid3');
}



// scroll code //

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("onzichtbaar").className = "verschijn";
    } else {
        document.getElementById("onzichtbaar").className = "";
    }
}

// scroll code //





// toetsenbord bediening //

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 40) {
    voegclasstoe();
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 38) {
    voegclasstoe();
    }
});

// toetsenbord bediening //










