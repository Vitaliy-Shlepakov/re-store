import React from 'react';
import './BookList.css';
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux';
import WithBookStoreService from '../hoc/WithBookStoreService';
import { booksLoaded } from "../../actions";

class BookList extends React.Component{

  componentDidMount(){
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  };

  render(){
    const { books } = this.props;
    return (
      <ul className="BookList">
        {
          books.map(item => {
            return (
              <li key={item.id}>
                <BookListItem book={item}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks))
//     }
//   }
// };

const mapDispatchToProps = {
  booksLoaded: booksLoaded
};

export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
