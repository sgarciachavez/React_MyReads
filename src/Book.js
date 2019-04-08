import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component{

  getImageUrl(){
    const book = this.props.book
    const noimage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyg8da3e037NhfpTWzj9CLbyyUhQmcglvrXd0kIsa4bjHAim3yA"
    const url = book.imageLinks !== undefined ? book.imageLinks.thumbnail : noimage
    return `url("${url}")`

  }
  render(){
      const {book,id,refreshShelves} = this.props
      //let thumbnail = `url("${book.imageLinks.thumbnail}")`
      const thumbnail = this.getImageUrl()

      console.log(JSON.stringify(book.imageLinks))
      let authors = book.authors ? book.authors.join(', ') : "Author Unknown"

    return(
      <li>
        <div id={id} className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail }}></div>

            <ChangeShelf book={book} refreshShelves={refreshShelves}/>

          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}
export default Book
