import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';

import DefiningTheGrid from '../data/DefiningTheGrid';

export default function MakeGrid() {
  const [copySuccess, setCopySuccess] = React.useState('');

  const handleCopy = (exampleKey) => {
    const example = DefiningTheGrid[exampleKey];
    const code = example.Code;

    navigator.clipboard.writeText(code)
    .then(() => {
      setCopySuccess(exampleKey);
      setTimeout(() => {
        setCopySuccess('');
      }, 2000); // Remover a mensagem após 2 segundos (2000 milissegundos)
    })
      .catch((error) => {
        console.error('Falha ao copiar o código:', error);
      });
  };

  return (
    <>
      <Navbar />
      <h3>DEFININDO O GRID</h3>
      <div className="container_examples">
        {Object.keys(DefiningTheGrid).map((exampleKey) => {
          const example = DefiningTheGrid[exampleKey];
          const numberOfItems = example.Result.NumberOfItems;
          const isSuccess = copySuccess === exampleKey;

          return (
            <div className="example" key={exampleKey}>
              <h4 className="example_title">{example.Title}</h4>
              <div className="example_description">{parse(example.Description)}</div>
              <div className="example_code">
                <h5>Exemplo {exampleKey}</h5>
                <div className="header_highlighter">
                  {!isSuccess && <button className="copy_button" onClick={() => handleCopy(exampleKey)}>Copiar</button>}
                  {isSuccess && <div className="copied">Copiado!</div>}
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
  );
}
