/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import type { QuoteAction } from "../types";
const initialState = {
  verse: '',
  book: '',
  id: 1,
  bookNameOnly: ''
};

const rootReducer = (state = initialState, action: QuoteAction) => {
  switch (action.type) {
    case 'SET_QUOTE':
      return {
        ...state,
        verse: action.payload.verse,
        book: action.payload.book,
        id: (state.id + Math.floor(Math.random() * 10)) > 100 ? (state.id + Math.floor(Math.random() * 10)): (1 + Math.floor(Math.random() * 10)),
        bookNameOnly: action.payload.bookNameOnly
      };
    default:
      return state;
  }
};

export default rootReducer;