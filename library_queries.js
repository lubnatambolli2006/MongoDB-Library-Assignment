// MongoDB Fundamentals Assignment
// Library Management System

// Create / switch to database
use("LibraryDB");

// Create collections
db.createCollection("books");
db.createCollection("authors");
db.createCollection("genres");

// --------------------
// INSERT AUTHORS
// --------------------

db.authors.insertMany([
  {
    author_id: 1,
    name: "J.K. Rowling",
    country: "United Kingdom",
    birth_year: 1965
  },
  {
    author_id: 2,
    name: "George Orwell",
    country: "United Kingdom",
    birth_year: 1903
  },
  {
    author_id: 3,
    name: "Jane Austen",
    country: "United Kingdom",
    birth_year: 1775
  },
  {
    author_id: 4,
    name: "Mark Twain",
    country: "United States",
    birth_year: 1835
  }
]);

// --------------------
// INSERT GENRES
// --------------------

db.genres.insertMany([
  {
    genre_id: 1,
    name: "Fantasy"
  },
  {
    genre_id: 2,
    name: "Fiction"
  },
  {
    genre_id: 3,
    name: "Classic"
  },
  {
    genre_id: 4,
    name: "Adventure"
  }
]);

// --------------------
// INSERT BOOKS
// --------------------

db.books.insertMany([
  {
    book_id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    price: 450
  },
  {
    book_id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    year: 1949,
    price: 350
  },
  {
    book_id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    year: 1813,
    price: 300
  },
  {
    book_id: 4,
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    genre: "Adventure",
    year: 1876,
    price: 280
  },
  {
    book_id: 5,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1998,
    price: 475
  }
]);

// --------------------
// READ OPERATION
// --------------------

// Display all books
db.books.find();

// Display all authors
db.authors.find();

// Display all genres
db.genres.find();

// --------------------
// SEARCH OPERATIONS
// --------------------

// Search books by author
db.books.find({
  author: "J.K. Rowling"
});

// Search books by genre
db.books.find({
  genre: "Fantasy"
});

// Search books published after 1950
db.books.find({
  year: { $gt: 1950 }
});

// Search books costing less than 400
db.books.find({
  price: { $lt: 400 }
});

// --------------------
// UPDATE OPERATION
// --------------------

// Update the price of 1984
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 375 } }
);

// Display updated book
db.books.find({
  title: "1984"
});

// --------------------
// DELETE OPERATION
// --------------------

// Delete The Adventures of Tom Sawyer
db.books.deleteOne({
  title: "The Adventures of Tom Sawyer"
});

// Display remaining books
db.books.find();
