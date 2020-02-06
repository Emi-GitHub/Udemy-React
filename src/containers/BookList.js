import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions/index'

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                 {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){ //this function is the glue between react and redux
    //our state contains the array of books and the active book
    //Whatever is returned will show up as props insde of BookList
    return {
        books: state.books
    }
}

//Anything returned from this function will up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
