import React from "react";
import { Navbar } from "../UI/Navbar";
import { Hero } from "../UI/Hero";
import { Main } from "../Inicio/Main";
import { Clasify } from "../Inicio/Clasify";
import { Message } from "../Inicio/Message";
import '../../style.css';

export function Inicio() {
  return (
    <>
      <header>
        <Navbar page='inicio' />
        <Hero />
      </header> 
      
      <Main />
      <Clasify />
      <Message />
    </>
  );
}


