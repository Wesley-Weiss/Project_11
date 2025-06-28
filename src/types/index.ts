/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
export interface SetQuoteAction {
  type: 'SET_QUOTE';
  payload: {
    book: string;
    verse: string;
    bookNameOnly: string;
  };
}

export interface AppState {
  verse: string;
  book: string;
  id: number;
  bookNameOnly: string;
}

export type QuoteAction = SetQuoteAction;
