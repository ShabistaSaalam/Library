
📚 My Library

A small yet complete JavaScript project to manage a personal book library.  
Users can add new books, mark them as read/unread, and remove them — all dynamically within the browser.

🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

✨ Features

- Add books with title, author, number of pages, and read status
- Use of native <dialog> element for a modal form
- Toggle read status for each book
- Remove books from the library
- Responsive, card-style layout
- “Dreamy, Pinteresty” aesthetic with subtle background animations

🔍 Tech Highlights

JavaScript
- Constructor functions – Used to define a Book blueprint
- Prototype method – Book.prototype.toggleRead toggles the hasRead boolean
- crypto.randomUUID() – Ensures each book has a unique, persistent ID
- DOM manipulation – createElement, innerHTML, and appendChild to render book cards
- Event handling – addEventListener, preventDefault, and form submission logic
- dataset + closest() – Efficiently link UI buttons to the correct book object

CSS
- Flexbox – Responsive layout for book cards
- Native <dialog> styling – Custom modal popup
- Subtle animations – Dreamy gradient background animation using @keyframes
- Shadows & border-radius – To create soft, visually appealing cards

HTML
- Semantic HTML5 – Clean structure with headings, buttons, and form elements
- Native <dialog> tag – Used for user-friendly modal form
- Form validation – Via required, type="number", etc.

📁 Project Structure

my-library/
├── index.html
├── style.css
├── script.js
└── README.txt

🚀 Getting Started

Clone the repo and open index.html in your browser:

git clone https://github.com/ShabistaSaalam/my-library.git
cd my-library

📌 Future Enhancements

- Add localStorage or IndexedDB for saving library data between sessions
- Improve accessibility (keyboard navigation, ARIA labels)
- Add edit functionality for existing books

Created as part of a self-paced JavaScript learning journey ✨
