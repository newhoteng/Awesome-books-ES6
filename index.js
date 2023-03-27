// import and export all required funtions
import Book from './modules/book.js';
// export {default as Book} from 'modules/book.js';
import Ui from './modules/display.js';
// export {default as Ui} from 'modules/display.js';
import Store from './modules/store.js';

import { displayBooks, displayForm, displayContact } from './modules/navigation.js';
// import { DateTime } from './node_modules/luxon/src/luxon.js';
import displayCurrentDate from './modules/current_date.js';

document.addEventListener('DOMContentLoaded', Ui.displaybooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
    alert('Please fill in all fields'); // eslint-disable-line
  } else {
    const book = new Book(title, author);

    Ui.addbooktolist(book);

    Store.addbook(book);

    Ui.clearFields();
  }
});

document.querySelector('#book-addition').addEventListener('click', (e) => {
  Ui.deletebook(e.target);
  Store.removebook(e.target.getAttribute('data-modal'));
});

// current date & time
document.getElementById('date').innerHTML = displayCurrentDate();

document.querySelector('.list-page').addEventListener('click', displayBooks);
document.querySelector('.add-page').addEventListener('click', displayForm);
document.querySelector('.contact-page').addEventListener('click', displayContact);
