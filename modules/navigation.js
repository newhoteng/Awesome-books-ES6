export const displayBooks = () => {
  document.querySelector('.book-list').classList.remove('invisible');
  document.querySelector('.add-books').classList.remove('visible');
  document.querySelector('.contact').classList.remove('visible');
};

export const displayForm = () => {
  document.querySelector('.book-list').classList.add('invisible');
  document.querySelector('.add-books').classList.add('visible');
  document.querySelector('.contact').classList.remove('visible');
};

export const displayContact = () => {
  document.querySelector('.book-list').classList.add('invisible');
  document.querySelector('.add-books').classList.remove('visible');
  document.querySelector('.contact').classList.add('visible');
};
