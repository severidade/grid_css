import React from "react"
import Navbar from "../components/Navbar/Navbar"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';

import DefiningTheGrid from '../data/DefiningTheGrid'


export default function MakeGrid() {

  const code = `.cards { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }`;
  
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopySuccess(true);
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };

  return(
    <>
      <Navbar/>
      <h3>DEFININDO O GRID</h3>
      <div className="container_examples">
        {Object.keys(DefiningTheGrid).map((exampleKey) => {
          const example = DefiningTheGrid[exampleKey];
          const numberOfItems = example.Result.NumberOfItems;

          return (
            <div className="example" key={exampleKey}>
              <h4 className="example_title">{example.Title}</h4>
              <div className="example_description">{parse(example.Description)}</div>
              <div className="example_code">
                <h5>Exemplo {exampleKey}</h5>
                <div className="header_highlighter">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={handleCopy}>Copy To Clipboard</button>
                    {copySuccess && <span>Copied to clipboard!</span>}
                  </div>
                </div>
                <SyntaxHighlighter language="css" style={coy}>
                  {example.Code}
                </SyntaxHighlighter>
              </div>
              <div className="resultado">
                <h5>Resultado</h5>
                <div className={`exemplo_${exampleKey}`}>
                  {Array.from(Array(numberOfItems).keys()).map((itemIndex) => (
                    <div className={`item item-0${itemIndex + 1}`} key={itemIndex}>
                      <p>{itemIndex + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}