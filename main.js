/*
populating the dom with js and fetching the api contents
*/
fetch('https://rickandmortyapi.com/api/character');
.then(response => response.json());
.then(data => show(data.result));

function show(data) {
   console.log(data);
 };
