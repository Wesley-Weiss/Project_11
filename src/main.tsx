/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/styles.scss'
import './css/bootstrap.css'
import { Provider } from 'react-redux'
import store from './store.ts'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
