/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;