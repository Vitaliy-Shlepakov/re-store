import React from 'react';
import './BookListItem.css';

const BookListItem = ({book}) => {
  const {title, author} = book;
  return (
    <>
      <span className="BookListItem_-Title">{ title }</span>
      <span className="BookListItem__Author">{ author }</span>
    </>
  );
};

export default BookListItem;
