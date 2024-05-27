# Exercício 1: Criando uma Pipeline de CI/CD com GitHub Actions e Testes Automatizados

Objetivo: Configurar uma pipeline de CI/CD usando GitHub Actions para um projeto de software simples e escrever dois testes automatizados: um teste unitário e um teste de integração.

Descrição: Os alunos devem escolher um projeto de software simples, como uma aplicação web básica ou um serviço de backend. Eles irão configurar uma pipeline de CI/CD utilizando GitHub Actions, que automatizará a construção, teste e deploy da aplicação.

## Configuração da Pipeline de CI/CD com GitHub Actions

Este projeto utiliza o GitHub Actions para automatizar a construção, teste e deploy da aplicação. A pipeline de CI/CD está configurada para executar as seguintes etapas:

1. **Construção do Projeto**: A cada push ou pull request na branch `main`, a pipeline é acionada para construir o projeto.
2. **Execução dos Testes Automatizados**: Após a construção, a pipeline executa os testes automatizados para garantir a integridade do código.
3. **Implantação**: Se todos os testes passarem com sucesso, a aplicação é implantada em [ambiente de implantação, como produção ou staging].

## Como Executar os Testes Localmente

Para executar os testes localmente, siga estas etapas:

1. Clone este repositório para o seu ambiente de desenvolvimento.
2. Instale as dependências do projeto executando `npm install`.
3. Execute os testes com o comando `npm test`.

## Como a Pipeline de CI/CD Funciona

Quando você envia um push ou pull request para o repositório, o GitHub Actions é acionado automaticamente. Ele verifica se há novas alterações na branch `main`, constrói o projeto, executa os testes automatizados e, se todos os testes passarem com sucesso, implanta a aplicação no ambiente especificado.

Configuração da pipeline de CI/CD, arquivo `https://github.com/lynicordeiro/Estudo/blob/main/.github/workflows/teste.yml`
Execução da pipeline, `https://github.com/lynicordeiro/Estudo/actions/runs/9256511922/job/25462623979`
