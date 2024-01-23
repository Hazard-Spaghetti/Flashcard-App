import React from "react";
import NavBar from "../client/components/NavBar/NavBar";
import '@testing-library/jest-dom';
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

afterEach(() =>{
    cleanup();
});

describe("Nav Bar", () =>{

    test("Rendering 'coolcards'", () =>{
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const text = screen.getByText("coolcards");
        expect(text).toBeInTheDocument();
    })
    
    
    test("Rendering DISCOVER", () =>{
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const text = screen.getByText("DISCOVER");
        expect(text).toBeInTheDocument();
    })


    test("Rendering INFO", () =>{
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const text = screen.getByText("INFO");
        expect(text).toBeInTheDocument();
    })
    
    test("Rendering DECKS", () =>{
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const text = screen.getByText("DECKS");
        expect(text).toBeInTheDocument();
    })

    test("Rendering LOGIN", () =>{
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const text = screen.getByText("LOGIN");
        expect(text).toBeInTheDocument();
    });
})