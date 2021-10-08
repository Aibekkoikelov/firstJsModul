'use strict';

let numberOfFilms ;

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};
function start (){
    numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели", '');
while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
   numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели", '');
}
}
// start();

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');



function remembersMyFilms(){
    for(let i = 0;i<2;i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          if(a !=null && b !=null && a !='' && b != '' && a.length < 50) {
            personalMovieDb.movies[a]= b;
          }else{
              i--;
          }
          
    }
}

// remembersMyFilms();





function detectPersonalLevel(){
    if(personalMovieDb.count < 10){
        console.log('просмотрено довольно мало фильмов');
    
    }else if (personalMovieDb.count >= 10 && personalMovieDb <=30){
        console.log('вы классический зритель');
    }else if(personalMovieDb.count > 30){
        console.log('ВЫ киноман');
    }else {console.log('произошла ошибка');}
}

// detectPersonalLevel();

function showMyDB  (genres){
    if(!genres){
        console.log(personalMovieDb);
    }

}
// showMyDB(personalMovieDb.privat);

function writeYourGenres (){
    for(let i = 1 ; i < 4; i++){
        personalMovieDb.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
showMyDB(personalMovieDb.privat);
writeYourGenres();


// personalMovieDb.movies[c] = d;
// console.log(personalMovieDb);

// const test = (a, b) => a * b;
// console.log(test(2,3));

// function test2 () {
//     console.log('hello');
// } 
// test2();

// const logg = 'Hello world fsfeef ferferf fersfrf';

// console.log(logg.slice(5,10));


// const num = '5.45';
// console.log(parseInt(num));

