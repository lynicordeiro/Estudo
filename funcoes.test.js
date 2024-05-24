// funcoes.test.js
const calcularPrecoTotal = require('./funcoes');

test('calcularPrecoTotal retorna o preço total correto', () => {
    const itens = [
        { nome: 'Item 1', preco: 10 },
        { nome: 'Item 2', preco: 20 },
        { nome: 'Item 3', preco: 30 }
    ];

    const precoTotal = calcularPrecoTotal(itens);

    expect(precoTotal).toBe(60);
});
