import React from "react"
import Navbar from "../components/Navbar/Navbar"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MakeGrid() {

  const code = `.cards { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }`;  

  return(
    <>
      <Navbar/>
      <h1>MakeGrid</h1>
      <SyntaxHighlighter language="css" style={coy}>
        {code}
      </SyntaxHighlighter>
    </>
  )
}