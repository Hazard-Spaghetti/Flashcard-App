import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Deck from '../Deck/Deck.jsx';
import { getDecks } from '../../utils/requests.js';

// create component body
const DeckContainer = () => {
  const [newDeck, setNewDeck] = useState('');

  // We need to set up 3 event handler functions for the Deck div, addDeck button and deleteDeck button
  // These functions will each contain fetch requests
  // Deck div: GET request to backend endpoint
  // Add deck: POST request to backend endpoint
  // Delete deck button: DELETE request to backend endpoint

  // retreive decks from store
  const decks = useSelector((state) => state.decks.decks);

  const [discoModeActive, setDiscoModeActive] = useState(false);

  // create functionality to map through backendResponse and have new mapped

  const renderedDecks = decks.map((deck, index) => (
    <Deck key={deck._id} deck={deck} index={index} />
  ));

  // create function to handle new deck form submissions
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('logging e: ', e.target[0].value);
    setNewDeck(e.target[0].value);

    const body = JSON.stringify({ deckName: e.target[0].value, cards: [] });

    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (response.status === 200) {
      await getDecks();
      setNewDeck('');
    }
  };
  // let nextAction = function (e) {
  //   return setNewDeck(e.target.value);
  // };
  let classNameOrDisco = null;

  // const discoMode = () => {
  //   e.preventDefault();
  //   const temp = nextAction;
  //   nextAction = classNameOrDisco;
  //   classNameOrDisco = temp;
  // };

  const inputOnChange = discoModeActive
    ? (e) => setNewDeck(e.target.value)
    : classNameOrDisco;

  return (
    <div className='DeckContainer'>
      <div className='formDiv'>
        <div className='deckSquare'>
          <h2>Decks</h2>
        </div>
        {/* Put this div within its own FORM */}
        <div className='addNewDeck'>
          <h3>Flashcards</h3>
          <h4>Add a new deck below</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter deck name'
              onChange={inputOnChange}
              // value='defaultValue'
              // onChange={(e) => setNewDeck(e.target.value)}
              // this event is causing disco mode FIX THIS
              // this should probably be onSUBMIT
              // prevent default?
            ></input>
            <button type='submit'>Add</button>
          </form>
        </div>
        <button onClick={() => setDiscoModeActive(!discoModeActive)}>
          Disco mode
        </button>
      </div>
      <section className='deckSection'>{renderedDecks}</section>
    </div>
  );
};

export default DeckContainer;
