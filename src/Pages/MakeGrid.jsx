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
        <div className="example">
          <h4 className="example_title">Criando o Conteiner</h4>

          <div className="example_description">
            <p>A primeria coisa a fazer é criar um <strong>grid container</strong> com as declarações CSS <strong class="codigo">display: grid</strong> ou <strong class="codigo">display: inline-grid</strong>. Assim declarado, todos os elementos filhos diretos daquele container se transformam em <strong>grid items</strong>.</p>
            <p>É preciso então estabelecer explicitamente o grid. No <strong>Exemplo 01</strong> temos um grid de 3 colunas com o valor <strong>1fr</strong> e duas linhas como o valor de <strong>200px</strong>.</p>
            <p class="obs"> A unidade <strong>fr</strong> representa uma fração do espaço disponível no container do grid.</p>
            <p>Com <strong class="codigo">grid-gap: 20px</strong> é definida a separaração tanto em colunas quanto em linhas dos <strong>grid-itens</strong> no valor de 10px.</p>
          </div>

          <div className="example_code">
            <h5>Exemplo 01</h5>
            <div className="header_highlighter">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handleCopy}>Copy To Clipboard</button>
                {copySuccess && <span>Copied to clipboard!</span>}
              </div>
            </div>
            <SyntaxHighlighter language="css" style={coy}>
              {code}
            </SyntaxHighlighter>
          </div>

          <div class="resultado">
            <h5>Resultado</h5>
            <div class="exemplo_01">
              <div class="item item-01"><p>01</p></div>
              <div class="item item-02"><p>02</p></div>
              <div class="item item-03"><p>03</p></div>
              <div class="item item-04"><p>04</p></div>
              <div class="item item-05"><p>05</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}