import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component{
  state = {
    query: '',
    hits: []
  }

  updateQuery = (query) => {
    this.setState({query: query}) //update this.state.query
    this.refreshResults() //getBooks from BooksAPI
  }

  refreshResults = () => {

    BooksAPI.search(this.state.query,20)
      .then((books) => {
        if(this.state.query === ''){
          this.setState({hits: []})
        }else{
            this.setState({hits: this.getEndResults(books)})
        }
      })
  }

  checkAuthors(authors,q){
    let filtered = authors.filter(author =>
      author.toLowerCase().includes(q)
    )

    return filtered.length > 0 //returns a boolean
  }

  getEndResults(books){
    let rbs = this.props.books //reserved collection from MyReads / shelves
    let q = this.state.query

    let filterMyReads = rbs.filter(book => //eliminate books that don't match the query from MyReads
      book.title.toLowerCase().includes(q.toLowerCase()) ||
      this.checkAuthors(book.authors, q.toLowerCase())
    )
    let results = filterMyReads

    if(books !== undefined && !books.hasOwnProperty("error")){ //Is the books obj VALID??
      //merge the filtered MyReads collection with the search results
      filterMyReads.forEach((rBook) => {
        let found = false
          books.forEach((book)=>{
            if(rBook.id === book.id){
              found = true
              book.shelf = rBook.shelf // add the shelf value
            }
          })
          if(!found){
            books.unshift(rBook) //add the rBook in personal collection to search results
          }
        })
         results = books
      }
      //console.log(results.hasOwnProperty("error"))
      if(results.hasOwnProperty("error")){
        results = []
      }
      return results
  }

  render(){
    const { query, hits } = this.state
    //const { books, refreshBooks } = this.props

    return(
    <div className="search-books">
      <div className="search-books-bar">

        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}

           <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(evt) => this.updateQuery(evt.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">

      <ol className="books-grid">
      {hits !== undefined ? hits.map(
        (b) => (
          <Book
            book={b}
            key={b.id}
            refreshShelves={this.props.refreshShelves}/>
          )
      ) :
      <li>No books found</li>}
      </ol>
      </div>
    </div>
  )}
}

export default Search
