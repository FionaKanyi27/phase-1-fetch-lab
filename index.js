function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())  // Convert the response to JSON
    .then((data) => renderBooks(data));  // Pass the data to renderBooks
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  // Check if bookList is not null
  if (bookList) {
    books.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.textContent = book.name; // Assuming the book object has a 'name' property
      bookList.appendChild(listItem);
    });
  } else {
    console.error("Book list element not found in the DOM.");
  }
}

// Call fetchBooks when the DOM content is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
