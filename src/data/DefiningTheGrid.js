const DefiningTheGrid = {
  1: {
    Title: "Criando o Contêiner",
    Description: "<p>A primeira coisa a fazer é criar um <strong>grid container</strong> com as declarações CSS <strong class='codigo'>display: grid</strong> ou <strong class='codigo'>display: inline-grid</strong>. Assim declarado, todos os elementos filhos diretos daquele container se transformam em <strong>grid items</strong>.</p><p>É preciso então estabelecer explicitamente o grid. No <strong>Exemplo 01</strong>, temos um grid de 3 colunas com o valor <strong>1fr</strong> e duas linhas com o valor de <strong>200px</strong>.</p><p class='obs'>A unidade <strong>fr</strong> representa uma fração do espaço disponível no container do grid.</p><p>Com <strong class='codigo'>grid-gap: 20px</strong>, é definida a separação tanto em colunas quanto em linhas dos <strong>grid items</strong> no valor de 10px.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 200px 200px;
      grid-gap: 20px;
    }`,
    Result:{
      NumberOfItems: 5,
    }
  },
  2: {
    Title: "Proporção entre colunas",
    Description: "<p>A proporção entre as colunas pode ser variável. No <strong>Exemplo 2</strong> foram criadas três colunas mas o espaço do grid foi dividido em 4 frações. As duas primeiras colunas ocupam respectivamente <strong>uma fração</strong> e a terceira coluna <strong>duas frações</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-rows: 100px 100px;
      grid-gap: 10px;
    }`,
    Result:{
      NumberOfItems: 6,
    }
  },
  3: {
    Title: "Unidades de comprimento",
    Description: "<p>É possível misturar a unidade <strong>fr</strong> com outras unidades de comprimento como: <strong>px, vw, em</strong>. Veja o <strong>Exemplo 04</strong> o container apresenta três colunas, a primeira com o valor fixo de <strong>30px</strong>. O espaço restante é dividido em três frações, sendo que a segunda coluna representa uma fração <strong>1fr</strong> e a terceira representa duas frações <strong>2fr</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: 30px 1fr 2fr;
      grid-template-rows: 100px 100px;
      grid-gap: 10px;
    }`,
    Result:{
      NumberOfItems: 6,
    }
  },
  4: {
    Title: "Otimizando a escrita",
    Description: "<p>A grafia reduzida <strong class='codigo'>grid-template-columns: repeat(2, 2fr) 1fr;</strong> pode ser utilizada para otimizar a escrita <strong>evitando a repetição</strong>. No <strong>Exemplo 04</strong>, o container foi dividido em 5 partes. As duas primeiras colunas representam 2 partes cada, enquanto a última representa uma parte.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(2, 2fr) 1fr;
      grid-template-rows: 100px 100px;
      grid-gap: 10px;
    }`,
    Result:{
      NumberOfItems: 6,
    }
  },
  5: {
    Title: "Grid implícito",
    Description: "<p>Nos exemplos mostrados até o momento, foram definidas as colunas e as linhas do grid. Todavia, se as linhas não forem definidas, elas serão automaticamente criadas. É o caso do <strong>Exemplo 05</strong>.</p><p class='obs'>As colunas precisam ser declaradas explicitamente.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }`,
    Result:{
      NumberOfItems: 8,
    }
  },
  6: {
    Title: "",
    Description: "<p>Para definir a altura da linha declarada implicitamente basta usar a propriedade <strong class='codigo'>grid-auto-rows</strong> atribuindo a ela um valor, como no <strong>Exemplo 6</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 100px;
      grid-gap: 10px;
    }`,
    Result:{
      NumberOfItems: 8,
    }
  }
};

export default DefiningTheGrid;
