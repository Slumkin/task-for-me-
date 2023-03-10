/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
numberOfFilms = +prompt('How manyvfilms did you watch?', "");

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('How many films did you watch?', "");
}
}
start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors:{},
genres: [],
private:false
 };



function rememberMyFilms() {
    for (let i=0; i < 2; i++) {
        const a = prompt('What was the last movie you were watching?', ""),
              b = prompt('How do you rate it', "");
              
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
        }

}

rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('You havent watched enough movies');   
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Typical spectator'); 
    } else if(personalMovieDB.count >= 30) {
        console.log('you are a cinephile');
    } else {
        console.log('just error');
        }
}

detectPersonalLevel();

function showmyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showmyDB(personalMovieDB.private);


function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        const genre = prompt(`Whats your favourite genre number ${i}?`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();