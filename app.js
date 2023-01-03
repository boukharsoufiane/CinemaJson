// <===============================SEND DATA====================================>
var movies;
var listOfmovies = new XMLHttpRequest();
listOfmovies.open('GET', 'dataMovies.json');
listOfmovies.onload = function () {
    movies = JSON.parse(this.responseText);
    afficher(movies)

};
listOfmovies.send();


// <===============================Tri DATA====================================>

document.getElementById("listTRi").onchange = function () {
    let triValue = document.getElementById("listTRi").value;
    if (triValue == "1") {
        movies[0].sort((a, b) => a.title.localeCompare(b.title));
        movies[1].sort((a, b) => a.title.localeCompare(b.title));
        movies[2].sort((a, b) => a.title.localeCompare(b.title));
        afficher(movies);
    }
    else if (triValue == "2") {
        movies[0].sort((a, b) => b.title.localeCompare(a.title));
        movies[1].sort((a, b) => b.title.localeCompare(a.title));
        movies[2].sort((a, b) => b.title.localeCompare(a.title));

        afficher(movies);
    }
    else if (triValue == "3") {
        movies[0].sort((a, b) => b.duree.localeCompare(a.duree));
        movies[1].sort((a, b) => b.duree.localeCompare(a.duree));
        movies[2].sort((a, b) => b.duree.localeCompare(a.duree));

        afficher(movies);
    }
    else if (triValue == "4") {
        movies[0].sort((a, b) => a.duree.localeCompare(b.duree));
        movies[1].sort((a, b) => a.duree.localeCompare(b.duree));
        movies[2].sort((a, b) => a.duree.localeCompare(b.duree));
        afficher(movies);
    }
    else if (triValue == "5") {
        movies[0].sort((a, b) => b.years - a.years);
        movies[1].sort((a, b) => b.years - a.years);
        movies[2].sort((a, b) => b.years - a.years);
        console.log(movies);
    }
    else if (triValue == "6") {
        movies[0].sort((a, b) => a.years - b.years);
        movies[1].sort((a, b) => a.years - b.years);
        movies[2].sort((a, b) => a.years - b.years);

        console.log(movies);
    }
    else {
        afficher(movies);
    }
}

// <===============================Rechercher DATA====================================>

function searche() {
    let searchValue = document.getElementById('searchInput').value;
    if(searchValue == ""){
        afficher(movies);
    }
    else {
        let foundMovies = [];
        for (let i = 0; i < movies.length; i++) {
            const filteredData = movies[i].filter(obj => obj.title.toLowerCase()[0] === searchValue.toLowerCase());
            for(let movie of filteredData){
                foundMovies.push(movie);
            }
        }
        let principalArray = [];
        principalArray.push(foundMovies);
        afficher(principalArray);
    }

}


// <===============================Afficher DATA========================================>

function afficher(movies) {
    document.getElementById('tableData').innerHTML = "";
    for (var i = 0; i < movies[0].length; i++) {
        var tableau = document.getElementById('tableData');
        var row = document.createElement('tr');
        var column = document.createElement('td');
        var column1 = document.createElement('td');
        var column2 = document.createElement('td');
        var column3 = document.createElement('td');
        var column4 = document.createElement('td');
        var column5 = document.createElement('td');
        var column6 = document.createElement('td');
        column.style.backgroundColor = "black";
        column1.style.backgroundColor = "black";
        column2.style.backgroundColor = "black";
        column3.style.backgroundColor = "black";
        column4.style.backgroundColor = "black";
        column5.style.backgroundColor = "black";
        column6.style.backgroundColor = "black";
        var paragraph = document.createElement('ul');
        var paragraph1 = document.createElement('ul');
        var paragraph2 = document.createElement('ul');
        var paragraph3 = document.createElement('a');
        var paragraph4 = document.createElement('a');
        var paragraph5 = document.createElement('a');
        var paragraph9 = document.createElement('a');
        var paragraph10 = document.createElement('a');
        var paragraph11 = document.createElement('a');
        var paragraph18 = document.createElement('a');
        var paragraph19 = document.createElement('a');
        var paragraph20 = document.createElement('a');
        var paragraph6 = document.createElement('li');
        var paragraph7 = document.createElement('li');
        var paragraph8 = document.createElement('li');
        var paragraph12 = document.createElement('li');
        var paragraph13 = document.createElement('li');
        var paragraph14 = document.createElement('li');
        var paragraph15 = document.createElement('li');
        var paragraph16 = document.createElement('li');
        var paragraph17 = document.createElement('li');
        var images = document.createElement('img');
        images.src = movies[0][i].poster;
        images.style.width = "30vw";
        images.style.width = "30vh";
        var cell1 = document.createTextNode(movies[0][i].title);
        var cell2 = document.createTextNode(movies[0][i].realisateur);
        var cell3 = document.createTextNode(movies[0][i].duree);
        var cell4 = document.createTextNode(movies[0][i].years);
        var cell5 = document.createTextNode(movies[0][i].festivals);
        var cell6 = document.createTextNode("Son nom :" + movies[0][i].actors[0].sonnom);
        var cell7 = document.createTextNode("Son prenom :" + movies[0][i].actors[0].sonprenom);
        var cell8 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[0].sanationalite);
        var cell9 = document.createTextNode("Son nom :" + movies[0][i].actors[1].sonnom);
        var cell10 = document.createTextNode("Son prenom :" + movies[0][i].actors[1].sonprenom);
        var cell11 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[1].sanationalite);
        var cell12 = document.createTextNode("Son nom :" + movies[0][i].actors[2].sonnom);
        var cell13 = document.createTextNode("Son prenom :" + movies[0][i].actors[2].sonprenom);
        var cell14 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[2].sanationalite);
        column.appendChild(images);
        column1.appendChild(cell1);
        column2.appendChild(cell2);
        column3.appendChild(cell3);
        column4.appendChild(cell4);
        column5.appendChild(cell5);
        paragraph3.appendChild(cell6);
        paragraph5.appendChild(cell8);
        paragraph6.appendChild(paragraph3);
        paragraph.appendChild(paragraph6);
        paragraph4.appendChild(cell7);
        paragraph7.appendChild(paragraph4);
        paragraph.appendChild(paragraph7);
        paragraph5.appendChild(cell8);
        paragraph8.appendChild(paragraph5)
        paragraph.appendChild(paragraph8);
        paragraph9.appendChild(cell9);
        paragraph12.appendChild(paragraph9);
        paragraph1.appendChild(paragraph12);
        paragraph10.appendChild(cell10);
        paragraph13.appendChild(paragraph10);
        paragraph1.appendChild(paragraph13);
        paragraph11.appendChild(cell11);
        paragraph14.appendChild(paragraph11);
        paragraph1.appendChild(paragraph14);
        paragraph18.appendChild(cell12);
        paragraph15.appendChild(paragraph18);
        paragraph2.appendChild(paragraph15);
        paragraph19.appendChild(cell13);
        paragraph16.appendChild(paragraph19);
        paragraph2.appendChild(paragraph16);
        paragraph20.appendChild(cell14);
        paragraph17.appendChild(paragraph20);
        paragraph2.appendChild(paragraph17);
        column6.appendChild(paragraph);
        column6.appendChild(paragraph1);
        column6.appendChild(paragraph2);
        row.appendChild(column);
        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);
        row.appendChild(column4);
        row.appendChild(column5);
        row.appendChild(column6);
        tableau.appendChild(row);
    }
    // <===============================Pagination DATA====================================>

    document.getElementById('listMOvies').onchange = function () {
        var pagination = document.getElementById('listMOvies').value;
        if (pagination == "1") {
            document.getElementById('tableData').innerHTML = "";
            for (var i = 0; i < movies[0].length; i++) {
                var tableau = document.getElementById('tableData');
                var row = document.createElement('tr');
                var column = document.createElement('td');
                var column1 = document.createElement('td');
                var column2 = document.createElement('td');
                var column3 = document.createElement('td');
                var column4 = document.createElement('td');
                var column5 = document.createElement('td');
                var column6 = document.createElement('td');
                column.style.backgroundColor = "black";
                column1.style.backgroundColor = "black";
                column2.style.backgroundColor = "black";
                column3.style.backgroundColor = "black";
                column4.style.backgroundColor = "black";
                column5.style.backgroundColor = "black";
                column6.style.backgroundColor = "black";
                var paragraph = document.createElement('ul');
                var paragraph1 = document.createElement('ul');
                var paragraph2 = document.createElement('ul');
                var paragraph3 = document.createElement('a');
                var paragraph4 = document.createElement('a');
                var paragraph5 = document.createElement('a');
                var paragraph9 = document.createElement('a');
                var paragraph10 = document.createElement('a');
                var paragraph11 = document.createElement('a');
                var paragraph18 = document.createElement('a');
                var paragraph19 = document.createElement('a');
                var paragraph20 = document.createElement('a');
                var paragraph6 = document.createElement('li');
                var paragraph7 = document.createElement('li');
                var paragraph8 = document.createElement('li');
                var paragraph12 = document.createElement('li');
                var paragraph13 = document.createElement('li');
                var paragraph14 = document.createElement('li');
                var paragraph15 = document.createElement('li');
                var paragraph16 = document.createElement('li');
                var paragraph17 = document.createElement('li');
                var images = document.createElement('img');
                images.src = movies[0][i].poster;
                images.style.width = "30vw";
                images.style.width = "30vh";
                var cell1 = document.createTextNode(movies[0][i].title);
                var cell2 = document.createTextNode(movies[0][i].realisateur);
                var cell3 = document.createTextNode(movies[0][i].duree);
                var cell4 = document.createTextNode(movies[0][i].years);
                var cell5 = document.createTextNode(movies[0][i].festivals);
                var cell6 = document.createTextNode("Son nom :" + movies[0][i].actors[0].sonnom);
                var cell7 = document.createTextNode("Son prenom :" + movies[0][i].actors[0].sonprenom);
                var cell8 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[0].sanationalite);
                var cell9 = document.createTextNode("Son nom :" + movies[0][i].actors[1].sonnom);
                var cell10 = document.createTextNode("Son prenom :" + movies[0][i].actors[1].sonprenom);
                var cell11 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[1].sanationalite);
                var cell12 = document.createTextNode("Son nom :" + movies[0][i].actors[2].sonnom);
                var cell13 = document.createTextNode("Son prenom :" + movies[0][i].actors[2].sonprenom);
                var cell14 = document.createTextNode("Sa nationalite :" + movies[0][i].actors[2].sanationalite);
                column.appendChild(images);
                column1.appendChild(cell1);
                column2.appendChild(cell2);
                column3.appendChild(cell3);
                column4.appendChild(cell4);
                column5.appendChild(cell5);
                paragraph3.appendChild(cell6);
                paragraph5.appendChild(cell8);
                paragraph6.appendChild(paragraph3);
                paragraph.appendChild(paragraph6);
                paragraph4.appendChild(cell7);
                paragraph7.appendChild(paragraph4);
                paragraph.appendChild(paragraph7);
                paragraph5.appendChild(cell8);
                paragraph8.appendChild(paragraph5)
                paragraph.appendChild(paragraph8);
                paragraph9.appendChild(cell9);
                paragraph12.appendChild(paragraph9);
                paragraph1.appendChild(paragraph12);
                paragraph10.appendChild(cell10);
                paragraph13.appendChild(paragraph10);
                paragraph1.appendChild(paragraph13);
                paragraph11.appendChild(cell11);
                paragraph14.appendChild(paragraph11);
                paragraph1.appendChild(paragraph14);
                paragraph18.appendChild(cell12);
                paragraph15.appendChild(paragraph18);
                paragraph2.appendChild(paragraph15);
                paragraph19.appendChild(cell13);
                paragraph16.appendChild(paragraph19);
                paragraph2.appendChild(paragraph16);
                paragraph20.appendChild(cell14);
                paragraph17.appendChild(paragraph20);
                paragraph2.appendChild(paragraph17);
                column6.appendChild(paragraph);
                column6.appendChild(paragraph1);
                column6.appendChild(paragraph2);
                row.appendChild(column);
                row.appendChild(column1);
                row.appendChild(column2);
                row.appendChild(column3);
                row.appendChild(column4);
                row.appendChild(column5);
                row.appendChild(column6);
                tableau.appendChild(row);
            }
        }
        else if (pagination == "2") {
            document.getElementById('tableData').innerHTML = "";
            for (var i = 0; i < movies[1].length; i++) {
                var tableau = document.getElementById('tableData');
                var row = document.createElement('tr');
                var column = document.createElement('td');
                var column1 = document.createElement('td');
                var column2 = document.createElement('td');
                var column3 = document.createElement('td');
                var column4 = document.createElement('td');
                var column5 = document.createElement('td');
                var column6 = document.createElement('td');
                column.style.backgroundColor = "black";
                column1.style.backgroundColor = "black";
                column2.style.backgroundColor = "black";
                column3.style.backgroundColor = "black";
                column4.style.backgroundColor = "black";
                column5.style.backgroundColor = "black";
                column6.style.backgroundColor = "black";
                var paragraph = document.createElement('ul');
                var paragraph1 = document.createElement('ul');
                var paragraph2 = document.createElement('ul');
                var paragraph3 = document.createElement('a');
                var paragraph4 = document.createElement('a');
                var paragraph5 = document.createElement('a');
                var paragraph9 = document.createElement('a');
                var paragraph10 = document.createElement('a');
                var paragraph11 = document.createElement('a');
                var paragraph18 = document.createElement('a');
                var paragraph19 = document.createElement('a');
                var paragraph20 = document.createElement('a');
                var paragraph6 = document.createElement('li');
                var paragraph7 = document.createElement('li');
                var paragraph8 = document.createElement('li');
                var paragraph12 = document.createElement('li');
                var paragraph13 = document.createElement('li');
                var paragraph14 = document.createElement('li');
                var paragraph15 = document.createElement('li');
                var paragraph16 = document.createElement('li');
                var paragraph17 = document.createElement('li');
                var images = document.createElement('img');
                images.src = movies[1][i].poster;
                images.style.width = "30vw";
                images.style.width = "30vh";
                var cell1 = document.createTextNode(movies[1][i].title);
                var cell2 = document.createTextNode(movies[1][i].realisateur);
                var cell3 = document.createTextNode(movies[1][i].duree);
                var cell4 = document.createTextNode(movies[1][i].years);
                var cell5 = document.createTextNode(movies[1][i].festivals);
                var cell6 = document.createTextNode("Son nom :" + movies[1][i].actors[0].sonnom);
                var cell7 = document.createTextNode("Son prenom :" + movies[1][i].actors[0].sonprenom);
                var cell8 = document.createTextNode("Sa nationalite :" + movies[1][i].actors[0].sanationalite);
                var cell9 = document.createTextNode("Son nom :" + movies[1][i].actors[1].sonnom);
                var cell10 = document.createTextNode("Son prenom :" + movies[1][i].actors[1].sonprenom);
                var cell11 = document.createTextNode("Sa nationalite :" + movies[1][i].actors[1].sanationalite);
                var cell12 = document.createTextNode("Son nom :" + movies[1][i].actors[2].sonnom);
                var cell13 = document.createTextNode("Son prenom :" + movies[1][i].actors[2].sonprenom);
                var cell14 = document.createTextNode("Sa nationalite :" + movies[1][i].actors[2].sanationalite);
                column.appendChild(images);
                column1.appendChild(cell1);
                column2.appendChild(cell2);
                column3.appendChild(cell3);
                column4.appendChild(cell4);
                column5.appendChild(cell5);
                paragraph3.appendChild(cell6);
                paragraph5.appendChild(cell8);
                paragraph6.appendChild(paragraph3);
                paragraph.appendChild(paragraph6);
                paragraph4.appendChild(cell7);
                paragraph7.appendChild(paragraph4);
                paragraph.appendChild(paragraph7);
                paragraph5.appendChild(cell8);
                paragraph8.appendChild(paragraph5)
                paragraph.appendChild(paragraph8);
                paragraph9.appendChild(cell9);
                paragraph12.appendChild(paragraph9);
                paragraph1.appendChild(paragraph12);
                paragraph10.appendChild(cell10);
                paragraph13.appendChild(paragraph10);
                paragraph1.appendChild(paragraph13);
                paragraph11.appendChild(cell11);
                paragraph14.appendChild(paragraph11);
                paragraph1.appendChild(paragraph14);
                paragraph18.appendChild(cell12);
                paragraph15.appendChild(paragraph18);
                paragraph2.appendChild(paragraph15);
                paragraph19.appendChild(cell13);
                paragraph16.appendChild(paragraph19);
                paragraph2.appendChild(paragraph16);
                paragraph20.appendChild(cell14);
                paragraph17.appendChild(paragraph20);
                paragraph2.appendChild(paragraph17);
                column6.appendChild(paragraph);
                column6.appendChild(paragraph1);
                column6.appendChild(paragraph2);
                row.appendChild(column);
                row.appendChild(column1);
                row.appendChild(column2);
                row.appendChild(column3);
                row.appendChild(column4);
                row.appendChild(column5);
                row.appendChild(column6);
                tableau.appendChild(row);
            }
        }
        else if (pagination == "3") {
            document.getElementById('tableData').innerHTML = "";
            for (var i = 0; i < movies[2].length; i++) {
                var tableau = document.getElementById('tableData');
                var row = document.createElement('tr');
                var column = document.createElement('td');
                var column1 = document.createElement('td');
                var column2 = document.createElement('td');
                var column3 = document.createElement('td');
                var column4 = document.createElement('td');
                var column5 = document.createElement('td');
                var column6 = document.createElement('td');
                column.style.backgroundColor = "black";
                column1.style.backgroundColor = "black";
                column2.style.backgroundColor = "black";
                column3.style.backgroundColor = "black";
                column4.style.backgroundColor = "black";
                column5.style.backgroundColor = "black";
                column6.style.backgroundColor = "black";
                var paragraph = document.createElement('ul');
                var paragraph1 = document.createElement('ul');
                var paragraph2 = document.createElement('ul');
                var paragraph3 = document.createElement('a');
                var paragraph4 = document.createElement('a');
                var paragraph5 = document.createElement('a');
                var paragraph9 = document.createElement('a');
                var paragraph10 = document.createElement('a');
                var paragraph11 = document.createElement('a');
                var paragraph18 = document.createElement('a');
                var paragraph19 = document.createElement('a');
                var paragraph20 = document.createElement('a');
                var paragraph6 = document.createElement('li');
                var paragraph7 = document.createElement('li');
                var paragraph8 = document.createElement('li');
                var paragraph12 = document.createElement('li');
                var paragraph13 = document.createElement('li');
                var paragraph14 = document.createElement('li');
                var paragraph15 = document.createElement('li');
                var paragraph16 = document.createElement('li');
                var paragraph17 = document.createElement('li');
                var images = document.createElement('img');
                images.src = movies[2][i].poster;
                images.style.width = "30vw";
                images.style.width = "30vh";
                var cell1 = document.createTextNode(movies[2][i].title);
                var cell2 = document.createTextNode(movies[2][i].realisateur);
                var cell3 = document.createTextNode(movies[2][i].duree);
                var cell4 = document.createTextNode(movies[2][i].years);
                var cell5 = document.createTextNode(movies[2][i].festivals);
                var cell6 = document.createTextNode("Son nom :" + movies[2][i].actors[0].sonnom);
                var cell7 = document.createTextNode("Son prenom :" + movies[2][i].actors[0].sonprenom);
                var cell8 = document.createTextNode("Sa nationalite :" + movies[2][i].actors[0].sanationalite);
                var cell9 = document.createTextNode("Son nom :" + movies[2][i].actors[1].sonnom);
                var cell10 = document.createTextNode("Son prenom :" + movies[2][i].actors[1].sonprenom);
                var cell11 = document.createTextNode("Sa nationalite :" + movies[2][i].actors[1].sanationalite);
                var cell12 = document.createTextNode("Son nom :" + movies[2][i].actors[2].sonnom);
                var cell13 = document.createTextNode("Son prenom :" + movies[2][i].actors[2].sonprenom);
                var cell14 = document.createTextNode("Sa nationalite :" + movies[2][i].actors[2].sanationalite);
                column.appendChild(images);
                column1.appendChild(cell1);
                column2.appendChild(cell2);
                column3.appendChild(cell3);
                column4.appendChild(cell4);
                column5.appendChild(cell5);
                paragraph3.appendChild(cell6);
                paragraph5.appendChild(cell8);
                paragraph6.appendChild(paragraph3);
                paragraph.appendChild(paragraph6);
                paragraph4.appendChild(cell7);
                paragraph7.appendChild(paragraph4);
                paragraph.appendChild(paragraph7);
                paragraph5.appendChild(cell8);
                paragraph8.appendChild(paragraph5)
                paragraph.appendChild(paragraph8);
                paragraph9.appendChild(cell9);
                paragraph12.appendChild(paragraph9);
                paragraph1.appendChild(paragraph12);
                paragraph10.appendChild(cell10);
                paragraph13.appendChild(paragraph10);
                paragraph1.appendChild(paragraph13);
                paragraph11.appendChild(cell11);
                paragraph14.appendChild(paragraph11);
                paragraph1.appendChild(paragraph14);
                paragraph18.appendChild(cell12);
                paragraph15.appendChild(paragraph18);
                paragraph2.appendChild(paragraph15);
                paragraph19.appendChild(cell13);
                paragraph16.appendChild(paragraph19);
                paragraph2.appendChild(paragraph16);
                paragraph20.appendChild(cell14);
                paragraph17.appendChild(paragraph20);
                paragraph2.appendChild(paragraph17);
                column6.appendChild(paragraph);
                column6.appendChild(paragraph1);
                column6.appendChild(paragraph2);
                row.appendChild(column);
                row.appendChild(column1);
                row.appendChild(column2);
                row.appendChild(column3);
                row.appendChild(column4);
                row.appendChild(column5);
                row.appendChild(column6);
                tableau.appendChild(row);
            }
        }
    }
}







