import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{

  render(){
    const {title, books, id, refreshShelves} = this.props
    return(
      <div id={id} className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {books.map(
                (b) => (
                  <Book
                    book={b}
                    key={b.id}
                    refreshShelves={refreshShelves}/> )
              )}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf
