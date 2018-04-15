/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/




var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var filmsElement = request.response;

    for (var i = 0; i < filmsElement.length; i++) {



        //// elementen worden gemaakt //
        var body = document.createElement('body');
        var header = document.createElement('header');
        var main = document.createElement('main');
        var section = document.createElement('section');
        var article = document.createElement('article');
        var h1 = document.createElement('h1');
        var img = document.createElement('img');


        //// einde maken van elementen  //




        //// json word in elementen gestopt //

        h1.textContent = filmsElement[i].title;
        img.src = filmsElement[i].cover;



        //// einde json word in elementen gestopt //






        //// locatie van de elementen word duidelijk gemaakt //
        body.appendChild(header);
        body.appendChild(main);
        main.appendChild(section);
        section.appendChild(article);
        article.appendChild(h1);
        article.appendChild(img);



        //// einde locatie van de elementen word duidelijk gemaakt //






        //// alle functies van de elementen //


        //// knopje voorbeeld //
        //
        //        button.addEventListener('click', function () {
        //            console.log("button click ", this)
        //
        //        });

        //// EINDE knopje voorbeeld //


        //// slides //


        //// EINDE slides //



        //// einde alle functies van de elementen //




    }
}
