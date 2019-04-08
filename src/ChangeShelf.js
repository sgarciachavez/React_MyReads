import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ChangeShelf extends Component{

    state = {
      shelf: "none"
    }

    options = {
      move: "Move to",
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read",
      none: "None"
    }

    handleChange = (evt) => {
      evt.preventDefault()
      const newshelf = evt.target.value
      const book = this.props.book

      if(book !== undefined && newshelf){
        BooksAPI.update(book, newshelf).then(() => {

          this.setState(() => ({
            shelf: newshelf
          }))
          this.props.refreshShelves()
        })
      }
    }

    componentDidMount(){
      const book = this.props.book
      const shelf = book.shelf ? book.shelf : "none"

      this.setState(() => ({
        shelf: shelf
      }))
    }

    getOption(key){
      if(key === "move"){
        return(<option key={key} value={key} disabled>{this.options[key]}</option>)
      }else{
        return(<option key={key} value={key}>{this.options[key]}</option>)
      }
    }

  render(){
    //const { book, refreshBooks, parent } = this.props
    const book = this.props.book


    return(
      <div className="book-shelf-changer">
        <select id={book.id} value={this.state.shelf} onChange={this.handleChange}>
       {Object.keys(this.options).map((key) => (
         this.getOption(key)
       ))}
        </select>
      </div>

    )
  }
}

export default ChangeShelf
