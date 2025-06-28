/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchQuote from './actions/quoteUpdateAction.ts';
import type { AppDispatch } from './store.ts';
import type { AppState } from './types/index.ts';

const QuoteBox= () => {
    const {book, verse} = useSelector((state:AppState)=> state);
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {dispatch(fetchQuote())} , [dispatch]);

    return(
        <div id="quote-box" className="">
            <blockquote className="blockquote mb-0 text-light">
                <p id="text">{verse}</p>
                <footer id="author" className="blockquote-footer ">{book}</footer>
            </blockquote>
            <div className="row">
                <div className="col-sm-4">
                    <a href={`twitter.com/intent/tweet?text=${encodeURIComponent(`"${verse}" — ${book}`)}`} rel='non-referer' id="tweet-quote" type="button" className="btn"><FontAwesomeIcon icon={faXTwitter}/> Tweet</a>
                </div>
                <div className="col-sm-4">
                    <button id="new-quote" type="button" className="btn" onClick={() => {
                        dispatch(fetchQuote());
                        }}>Next <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;