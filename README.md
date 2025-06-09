# URL Shortener

Este é um projeto de encurtador de URLs desenvolvido com NestJS.

## Pré-requisitos

### Node Version Manager (NVM)

**IMPORTANTE:** Este projeto utiliza NVM para garantir a versão correta do Node.js.

1. Instale o NVM:
   - [Windows](https://github.com/coreybutler/nvm-windows/releases)
   - [Linux/macOS](https://github.com/nvm-sh/nvm#installing-and-updating)

2. Após clonar o repositório, configure o Node.js:

```bash
# Instala a versão LTS do Node.js especificada no arquivo .nvmrc
nvm install

# Ativa a versão do Node.js para este projeto
nvm use
```

## Configuração do Ambiente

### 1. Instalação das Dependências

```bash
npm install
```

### 2. Ambiente de Desenvolvimento com Docker

**IMPORTANTE:** Este projeto utiliza Docker Compose para configurar o ambiente de desenvolvimento.

```bash
# Inicia os containers de desenvolvimento (PostgreSQL)
npm run local-infra:setup
# ou diretamente
docker-compose -f docker-compose.dev.yml up -d
```

O Docker Compose irá configurar:
- PostgreSQL 16 (porta 5432)
  - Database: url_shortener
  - Usuário: postgres
  - Senha: postgres

### 3. Iniciando a Aplicação

```bash
# Modo de desenvolvimento com hot-reload
npm run start:dev
```

Outras opções disponíveis:
```bash
# Modo de desenvolvimento padrão
npm run start

# Modo de debug
npm run start:debug

# Modo de produção
npm run start:prod
```

## Testes

```bash
# Testes unitários
npm run test

# Testes com watch mode
npm run test:watch

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Limpeza do Ambiente

Para parar e remover os containers de desenvolvimento:

```bash
npm run local-infra:cleanup
# ou diretamente
docker-compose -f docker-compose.dev.yml down -v
```

## Tecnologias Utilizadas

- NestJS 11
- PostgreSQL 16
- Passport JWT para autenticação
- Class Validator e Class Transformer para validação
- Docker para ambiente de desenvolvimento

## Licença

Este projeto está licenciado sob a licença MIT.
