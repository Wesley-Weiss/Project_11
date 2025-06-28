/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import type { RootState } from "../store";
import type { Dispatch } from "redux";

const fetchQuote = () => {

  return async (dispatch:Dispatch, getState: () => RootState ) => {
    const {id} = getState();
    try {
      const response = await fetch(`https://holy-bible-verses.p.rapidapi.com/verse/${id}`, {
        headers: { 'x-rapidapi-key': '0b55c05c3amshd83c07da3477250p1ebd84jsn36b1e9183616' }
      });
      const data = await response.json();
      const bookArray = data.book.split(" ")

      const bookNameOnly = bookArray.length === 3? [bookArray[0], bookArray[1]].join(" "): bookArray[0];

      dispatch({
        type: 'SET_QUOTE',
        payload: {
          verse: data.verse,
          book: data.book,
          bookNameOnly: bookNameOnly,
        }
      });
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };
};

export default fetchQuote;