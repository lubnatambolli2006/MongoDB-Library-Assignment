# MongoDB Fundamentals Assignment

## Library Management System

### 1. Introduction

MongoDB is a NoSQL database management system that stores data in flexible, JSON-like documents. Unlike relational databases, MongoDB stores data in collections instead of tables.

For this assignment, a simple Library Management System was created using MongoDB Atlas.

---

## 2. MongoDB Setup and Configuration

MongoDB Atlas was used as the cloud-based MongoDB environment, so no local MongoDB installation was required.

The following configuration was performed:

- Created a MongoDB Atlas account.
- Created a project named Project 0.
- Created a Free MongoDB cluster named `Cluster0-LibraryCluster`.
- Created the database `LibraryDB`.
- Created three collections:
  - `books`
  - `authors`
  - `genres`

---

## 3. Data Model

The Library Management System contains three collections.

### Books Collection

The `books` collection contains:

- Book ID
- Title
- Author
- Genre
- Publication Year
- Price

Example:

```json
{
  "book_id": 1,
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J.K. Rowling",
  "genre": "Fantasy",
  "year": 1997,
  "price": 450
}
