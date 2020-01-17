import React from 'react';
import { BookstoreServiceConsumer } from "../BookStore-Service-Context/BookStore-Service-Context";

const WithBookStoreService = () => Wrapped => {
  return props => {
    return (
      <BookstoreServiceConsumer>
        {
          bookstoreService => {
            return (
              <Wrapped
                {...props}
                bookstoreService={bookstoreService}
              />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default WithBookStoreService;
