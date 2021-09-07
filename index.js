function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  // To pass the tests, don't forget to return your fetch!
  .then(function(resp){
    return resp.json()
  })//then converts json into something useful
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//total number of pages of all the books
//694 pages in book1
//768 in book2
//

// const array = ['1' '2'];

// array.forEach(element => console.log(element));

// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));