const library = [];

function addBook() {
  const title = prompt("Book title:");
  const author = prompt("Author:");
  const newBook = {
    title: title,
    author: author,
    isRead: false
  };
  library.push(newBook);
  alert(`"${title}" has been added!`);
}

function listBooks() {
  if (library.length === 0) {
    alert("The library is empty.");
    return;
  }
  library.forEach(function(book) {
    const status = book.isRead ? "Read" : "Unread";
    console.log(`${status} | "${book.title}" by ${book.author}`);
  });
}

function markAsRead(title) {
  const book = library.find(function(b) {
    return b.title === title;
  });
  if (book) {
    book.isRead = true;
    alert(`"${title}" marked as read!`);
  } else {
    alert(`Could not find a book with the title "${title}".`);
  }
}

function removeBook(title) {
  const index = library.findIndex(function(b) {
    return b.title === title;
  });
  if (index !== -1) {
    library.splice(index, 1);
    alert(`"${title}" has been removed.`);
  } else {
    alert(`Could not find a book with the title "${title}".`);
  }
}

function listUnread() {
  const unread = library.filter(function(book) {
    return book.isRead === false;
  });
  if (unread.length === 0) {
    alert("No unread books!");
    return;
  }
  unread.forEach(function(book) {
    console.log(`"${book.title}" by ${book.author}`);
  });
}

let running = true;

while (running) {
  const choice = prompt(`Book Tracker
1. Add Book
2. List Books
3. Mark Book as Read
4. List Unread Books
5. Remove a Book
6. Exit

Enter your choice:`);

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3":
      const title = prompt("Enter the title of the book to mark as read:");
      markAsRead(title);
      break;
    case "4":
      listUnread();
      break;
    case "5":
      const titleToRemove = prompt("Enter the title of the book to remove:");
      removeBook(titleToRemove);
      break;
    case "6":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice.");
  }
}