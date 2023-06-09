const DefiningTheGrid = {
  example1: {
    Title: "Criando o Contêiner",
    Description: "<p>A primeira coisa a fazer é criar um <strong>grid container</strong> com as declarações CSS <strong class='codigo'>display: grid</strong> ou <strong class='codigo'>display: inline-grid</strong>. Assim declarado, todos os elementos filhos diretos daquele container se transformam em <strong>grid items</strong>.</p><p>É preciso então estabelecer explicitamente o grid. No <strong>Exemplo 01</strong>, temos um grid de 3 colunas com o valor <strong>1fr</strong> e duas linhas com o valor de <strong>200px</strong>.</p><p class='obs'>A unidade <strong>fr</strong> representa uma fração do espaço disponível no container do grid.</p><p>Com <strong class='codigo'>grid-gap: 20px</strong>, é definida a separação tanto em colunas quanto em linhas dos <strong>grid items</strong> no valor de 10px.</p>",
    Code: `.cards { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 200px 200px;
    grid-gap: 20px;
  }`
  },
  example2: {
    Title: "Proporção entre colunas",
    Description: "<p>A proporção entre as colunas pode ser variável. No <strong>Exemplo 2</strong> foram ciadas três colunas mas o espaço do grid foi dividido em 4 frações. As duas primeiras colunas ocupam respectivamente <strong>uma fração</strong> e a terceira coluna <strong>duas frações</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-rows: 100px 100px;
      grid-gap: 10px;
    }`
  }
};

export default DefiningTheGrid;
