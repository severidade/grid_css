const ImpliedGridData = {
  5: {
    Title: "Adicionando linhas implicitamente",
    Description: "<p>Nos exemplos mostrados até o momento, foram definidas as colunas e as linhas do grid. No entanto, se as linhas não forem definidas, elas serão criadas automaticamente. Isso é exemplificado no <strong>Exemplo 5</strong>.</p><p class=\"obs\">As colunas precisam ser declaradas explicitamente.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }`,
    Result: {
      NumberOfItems: 8,
    }
  },
  6: {
    Title: "Linhas implícitas com altura fixa",
    Description: "<p>Para definir a altura da linha declarada implicitamente, basta usar a propriedade <strong class=\"codigo\">grid-auto-rows</strong> atribuindo a ela um valor, como no <strong>Exemplo 6</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 100px;
      grid-gap: 10px;
    }`,
    Result: {
      NumberOfItems: 8,
    }   
  },
  7: {
    Title: "Adicionando colunas automaticamente",
    Description: "<p>Para estabelecer o ajuste de colunas no grid automaticamente, basta usar o valor <strong class=\"codigo\">auto-fill</strong> definindo uma largura para a coluna. Caso o <strong>grid-item</strong> não caiba naquela linha, ele é automaticamente enviado para a linha abaixo.</p><p>Haverá espaços vazios no <strong>grid-container</strong> caso:</p><ul><li>o valor seja menor que o especificado para a largura da coluna;</li><li>Se a largura total de todos os <strong>grid-items</strong> mais os <strong>grid-gaps</strong> for menor que o comprimento do container.</li></ul><p>Redimensione a caixa cinza do <strong>Exemplo 7</strong> e veja o resultado.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px);
      grid-auto-rows: 100px;
      grid-gap: 10px;
    }`,
    Resize: true,
    Result: {
      NumberOfItems: 6,
    }   
  },
  8: {
    Title: "A função minmax( )",
    Description: "<p>Com a função <strong>minmax</strong> é possível criar um grid mais flexível, diminuindo a possibilidade de aparecimento de espaços vazios, pois a largura da coluna é definida por um intervalo <strong class=\"codigo\">minmax(200px, 2fr)</strong>.</p>",
    Code: `.cards { 
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: 100px;
      grid-gap: 10px;
    }`,
    Resize: true,
    Result: {
      NumberOfItems: 6,
    }   
  },
};

export default ImpliedGridData;