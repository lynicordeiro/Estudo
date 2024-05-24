const fs = require('fs');

describe('Configuração do package.json', () => {
  test('Deve conter o script "test"', () => {
    // Carregar o conteúdo do arquivo package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    // Verificar se o script "test" está definido no package.json
    expect(packageJson.scripts).toHaveProperty('test');
  });
});
