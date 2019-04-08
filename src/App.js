import React from 'react'
import './App.css'
import BookCase from './BookCase'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
       books: [],
       refresh: false
     }

  componentDidMount() {
    this.getBooks()
  }

  componentDidUpdate(){
    if(this.state.refresh){
      this.getBooks()
      this.setState(() => ({
        refresh: false
      }))
    }
  }

  //refreshShelves is a function passed to:
  //BookCase => BookShelf => Book => ChangeShelf
  //    AND  Also to...
  //Search => Book => ChangeShelf
  //Unlimitely used in ChangeShelf ONLY
  refreshShelves = () => {
    this.setState(() => ({
      refresh: true
    }))
  }

  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>
            <BookCase books={this.state.books} refreshShelves={this.refreshShelves}/>
        }/>
        <Route path='/search' render={() =>
            <Search books={this.state.books} refreshShelves={this.refreshShelves}/>
        }/>
      </div>
    )
  }
}

export default BooksApp
