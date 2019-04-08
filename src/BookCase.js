import React, { Component } from 'react'
import BookShelf from './BookShelf'
import GotoSearch from './GotoSearch'

class BookCase extends Component{

  getBooks(key){
    return(this.props.books.filter(book => book.shelf === key))
  }

  shelves = [
    {
      title: "Currently Reading",
      key: "currentlyReading"
    },
    {
      title: "Want to Read",
      key: "wantToRead"
    },
    {
      title: "Read",
      key: "read"
    }
  ]

  render(){
    //const { books, refreshBooks } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map((shelf) => (
              <BookShelf
                title={shelf.title}
                books={this.getBooks(shelf.key)}
                key={shelf.key}
                refreshShelves={this.props.refreshShelves}/>
              ))}
          </div>
        </div>
         <GotoSearch />
      </div>
    )
  }

}

export default BookCase
