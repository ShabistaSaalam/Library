const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "read" : "not read yet"}`;
  };
}

Book.prototype.toggleRead = function () {
  this.hasRead = !this.hasRead;
};

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
}

function removeBookFromLibrary(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

function displayBooks() {
  const container = document.getElementById("book-container");
  container.innerHTML = ""; // Clear previous books

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.hasRead ? "Read" : "Not read yet"}</p>
      <button class="remove-btn">Remove</button>
      <button class="toggle-read-btn">Toggle Read</button>
    `;

    container.appendChild(bookCard);

    // Remove button listener
    bookCard.querySelector(".remove-btn").addEventListener("click", () => {
      removeBookFromLibrary(book.id);
    });

    // Toggle read button listener
    bookCard.querySelector(".toggle-read-btn").addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });
  });
}

// Add initial books for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);

// Display on page load
displayBooks();

// Modal logic
const newBookBtn = document.getElementById("new-book-btn");
const dialog = document.getElementById("book-dialog");
const closeBtn = document.getElementById("close-dialog-btn");

newBookBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());

const form = document.getElementById("book-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = parseInt(document.getElementById("pages").value);
  const hasRead = document.getElementById("hasRead").checked;

  if (title && author && !isNaN(pages)) {
    addBookToLibrary(title, author, pages, hasRead);
    displayBooks();
    form.reset();
    dialog.close();
  } else {
    alert("Please fill out all fields correctly.");
  }
});
