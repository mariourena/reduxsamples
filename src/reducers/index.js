import { combineReducers } from 'redux';
import Books from './books';
import ActiveBook from './active-book';

const rootReducer = combineReducers({
	books: Books
	, activeBook: ActiveBook
});

export default rootReducer;
