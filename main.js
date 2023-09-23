/*
populating the dom with js and fetching the api contents
*/
fetch('https://rickandmortyapi.com/api/character');
.then(response => response.json());
.then(data => show(data.result));

function show(data) {
// trying my first commit
   for (var pic in data.articles) {
      console.log(pic[image}
}
   console.log(data);
 };
//noticed i didn't call the function hhhh...
show(data)
