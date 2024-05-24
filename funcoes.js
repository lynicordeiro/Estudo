// funcoes.js
function calcularPrecoTotal(itens) {
    return itens.reduce((total, item) => total + item.preco, 0);
}

module.exports = calcularPrecoTotal;
