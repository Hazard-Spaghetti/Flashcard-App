import React from "react";
import CardForm from "../client/components/CardForm/CardForm.jsx";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../client/redux/store";

afterEach(() =>{
    cleanup();
});

describe("Card Form", () =>{

    test("Check text for Front of Card'", () =>{
        render(<Provider store={store} > <CardForm /> </Provider>);
        // const text = screen.getByText("Front of card");
        const inputField = screen.getByPlaceholderText('Front of Card');
        expect(inputField).toBeInTheDocument();
      })
    })



{/* <div className='CardForm'>
      <div className='formSection'>
        <form class='formContent' onSubmit={handleSubmit}>
          <label>
            <input
              type='text'
              name='cardFront'
              placeholder='Front of card'
              onChange={(e) => setCardFront(e.target.value)}
              required
            />
          </label>
          {/* this creates the back of the new flashcard that was just created */}
        //   <label>
        //     <input
        //       type='text'
        //       name='cardBack'
        //       placeholder='Back of card'
        //       onChange={(e) => setCardBack(e.target.value)}
        //       required
        //     />
        //   </label>
        //   {/* this button adds a card */}
        //   <button type='submit'>Add Card</button> */}