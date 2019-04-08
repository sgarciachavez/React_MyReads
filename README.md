# MyReads Project

This application is a bookshelf app that allows the user to select and categorize books of their choice into 4 different categories, 3 of which are displayed on the Main page. 

1. Currently Reading
2. Want to Read
3. Read
4. None (Completely removing it from your shelf)

The app also provides a search cabability to search for more books and add them to your categories. 

## Why develop this App
This project was developed to fulfill the final assessment project for Udacity's React
Fundamentals course.  A starter template was provided which included a static example of the CSS and HTML markup which is being used for this project. However the starter template did not include any of the **React Components** needed to complete the project. **The required interactivity to the app has been developed and added by refactoring the static code.**


## Installation Instructions

* install all project dependencies with `npm install`
* install react-router-dom with `npm install --save react-router-dom`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with this app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # NOT MODIFY and provided in the starter template.
└── src
    ├── icons # Images for the app. No changes made and provided in the starter template.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for the app. No changes made and provided in the starter template.
    ├── App.js # This is the root of the app. Contains required React components
    ├── App.test.js # No changes made and provided in the starter template.
    ├── Book.js # NEW FILE.  React Component to represent a book
    ├── BookCase.js # NEW FILE.  React Component to represent a collection of different shelves
    ├── BooksAPI.js # A JavaScript API provided by Udacity backend. No changes made and provided in the starter template.
    ├── BookShelf.js # NEW FILE. React Component representing a specific shelf to hold a collection of books.
    ├── ChangeShelf.js # NEW FILE. React Component for the drop down menu to update the shelf value
    ├── GotoSearch.js # NEW FILE. Simple React Component for the Search button     
    ├── index.css # Global styles. No changes made and provided in the starter template.
    └── index.js # No changes made and provided in the starter template.
    ├── Search.js # NEW FILE. React Component representing the Search page and the functionality of the search interactivity.
```

## Backend Server

To simplify the development process, the starter template provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. This app has implemented the needed code to make sure the books have the correct state/shelf while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results.
