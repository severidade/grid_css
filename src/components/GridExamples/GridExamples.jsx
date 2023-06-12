import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import parse from 'html-react-parser';

import './GridExamples.css';

export default function GridExamples({ gridData }) {

  const [copySuccess, setCopySuccess] = React.useState('');

  const handleCopy = (exampleKey) => {
    const example = gridData[exampleKey];
    const code = example.Code;

    const tempInput = document.createElement('textarea');
    tempInput.value = code;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
      const success = document.execCommand('copy');
      if (success) {
        setCopySuccess(exampleKey);
        setTimeout(() => {
          setCopySuccess('');
        }, 2000);
      } else {
        console.error('Falha ao copiar o código');
      }
    } catch (error) {
      console.error('Falha ao copiar o código:', error);
    }

    document.body.removeChild(tempInput);
  };

  return (
    <div className="container_examples">
      {Object.keys(gridData).map((exampleKey) => {
        const example = gridData[exampleKey];
        const numberOfItems = example.Result.NumberOfItems;
        const isSuccess = copySuccess === exampleKey;

        return (
          <div className="example" key={exampleKey}>
            {example.Title &&
              <h4 className="example_title">{example.Title}</h4>
            }
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
              <div className={`exemplo_${exampleKey} ${example.Resize ? "resize" : ""}`} key={exampleKey}>

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
  );
}