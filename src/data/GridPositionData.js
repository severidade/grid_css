/* eslint-disable no-multi-str */
const GridPositionData = {
  1: {
    Title: "Conhecendo os termos",
    Description: "<div class=\"glossario\"><p><strong>Grid Track</strong> é o espaço entre duas <strong>grid lines</strong>. É definido no grid explícito usando <strong class=\"codigo\">grid-template-columns</strong> e <strong class=\"codigo\">grid-template-rows</strong></p>\
    <p><strong>Grid Lines</strong> são verticais e horizontais e podem ser referidas através de um número ou pelo nome. Quando definido um valor para o <strong class=\"codigo\">grid-gap</strong>, elas ficam mais largas.</p>\
    <p><strong>Grid Cell</strong> é a menor unidade em um grid delimitada por quatro <strong>grid lines</strong>, comparado a uma célula de uma tabela.</p>\
    <p><strong>Grid Area</strong> é qualquer área no grid definida por quatro <strong>grid lines</strong> que contenha mais do que uma <strong>grid-cell</strong></p></div>",
    Code: "",
    Result: {
      NumberOfItems: 0,
    }
  },
  9: {
    Title: "Criando um Grid Base",
    Description: "<p>Para exemplificar estou criando um grid com três colunas e adicionando colunas automáticas com altura de 200px usando a propriedade <strong>grid-auto-rows</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 200px;
      grid-gap: 10px;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
  10: {
    Title: "Posicionando usando Line Numbers",
    Description: "<p>Os exemplos <strong>10</strong> e <strong>11</strong> definem para o <strong>Elemento 1</strong> sua <strong>grid-area</strong> com base na numeração das colunas. O resultado é o mesmo, mas a forma de declarar varia.</p> \
    <p>No <strong>Exemplo 10</strong>, a área é declarada usando as propriedades <strong class=\"codigo\">grid-column-start</strong>, <strong class=\"codigo\">grid-column-end</strong>, <strong class=\"codigo\">grid-row-start</strong> e <strong class=\"codigo\">grid-row-end</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 200px;
      grid-gap: 10px;
    }	
    .cards .item:nth-child(1) {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
  11: {
    Title: "",
    Description: "",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 200px;
      grid-gap: 10px;
    }	
    .cards .item:nth-child(1) {
      grid-column: 2 / 4;
      grid-row: 1 / 3;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
  12: {
    Title: "Posicionando usando Grid-area",
    Description: "<p>A declaração mais simples feita referenciando o número das linhas que delimitam a área que o <strong>grid item</strong> deverá ocupar é feita através da propriedade <strong class=\"codigo\">grid-area</strong> com os valores correspondentes ao <strong>grid-row-start</strong>, <strong>grid-column-start</strong>, <strong>grid-row-end</strong> e <strong>grid-column-end</strong> separados por \"/\".</p>\
    <p class=\"obs\">Ao contrário da declaração de padding, os valores usados correspondem à declaração dos limites da área no sentido anti-horário.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 200px;
      grid-gap: 10px;
    }	
    .cards .item:nth-child(1) {
      grid-area: 1 / 2 / 3 / 4;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
  13: {
    Title: "Posicionando usando line names",
    Description: "<p>Quando o grid é criado, as linhas devem ser nomeadas. Assim, os <strong>grid-itens</strong> poderão ser posicionados no grid das seguintes formas:</p>\
    <ul>\
      <li>Mencionando o <strong>nome das linhas</strong> que delimitam o início e o fim da área do <strong>grid-item</strong> com as propriedades <strong class=\"codigo\">grid-column-start</strong>, <strong class=\"codigo\">grid-column-end</strong>, <strong class=\"codigo\">grid-row-start</strong> e <strong class=\"codigo\">grid-row-end</strong>.</li>\
      <li>Usando a propriedade <strong class=\"codigo\">grid-area</strong> e mencionando as linhas de início e fim através dos nomes respectivos, assim delimitando a área do <strong>grid-item</strong>.</li>\
      <li>Usando a propriedade <strong class=\"codigo\">grid-area</strong> e mencionando a área como no caso da célula 3. No exemplo, as linhas definem dois containers, um com o nome <strong>content</strong> e outro com o nome <strong>main</strong>.</li>\
    </ul>",
    Code: `
    .cards { 
      display: grid;
      grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
      grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
      grid-gap: 10px;
    }

    .cards .item:nth-child(1) {
      grid-row-start: content-end;
      grid-column-start: content-end;
      grid-row-end: main-end;
      grid-column-end: main-end;
      
    }

    .cards .item:nth-child(2) {
      grid-area: main-start / main-start / main-end / content-start;	
    }
    
    .cards .item:nth-child(3) {
      grid-area: content ;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
  14: {
    Title: "Definindo Grid áreas",
    Description: "<p>Cada <strong>grid-item</strong> é nomeado com o uso da propriedade <strong class=\"codigo\">grid-area</strong>. No <strong>grid-container</strong>, com o uso da propriedade <strong class=\"codigo\">grid-template-areas</strong>, mapeamos o posicionamento dos itens no grid.</p><p class=\"obs\">Usando <strong>Media queries</strong>, podemos definir grids e posicionamentos diferenciados para os itens em função dos tamanhos de telas.</p>",
    Code: 
    `.cards{
      display: grid;
      grid-template-columns: repeat(3 , 1fr);
      grid-template-rows: repeat(2 , 200px);
      grid-gap: 10px;
      grid-template-areas:	" side1 main main"
                            " side2 main main";
    }
    
    .cards .item:nth-child(1) {
      grid-area: side1;
      
    }
    .cards .item:nth-child(2) {
      grid-area: side2;	
    }
    
    .exemplo_14 .item:nth-child(3) {
      grid-area: main;
    }`,
    Resize: false,
    Result: {
      NumberOfItems: 3,
    }   
  },
};

export default GridPositionData;
