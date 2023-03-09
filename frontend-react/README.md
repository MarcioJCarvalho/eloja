# **Front-end**

## **Configuração do ambiente**
- ### Node: **18.13.0** ou LTS mais recente

---
&nbsp;

## **Setup inicial (criação do .env):**
#### Antes de rodar os comandos, primeiramente crie uma cópia do `.env.example` e renomeie para `.env` preenchendo os campos de configuração do banco de dados:
```bash
cp .env.example .env
```

&nbsp;

---
&nbsp;

## **Comandos úteis**

### Inicia o front-end no modo desenvolvimento:

```bash
yarn dev
```

### Realiza o build do projeto typescript para javascript:

```bash
yarn build
```

### Inicia o front-end buildado para javascript para averiguação:

```bash
yarn preview
```

#### Verifica se o código desenvolvido está dentro das regras de padronização e estilização:

```bash
yarn check:lint
```

#### Executa as possíveis correções das regras de padronização de código:

```bash
yarn fix:lint
```

#### Executa as possíveis correções de identação e estilos de código:

```bash
yarn prettify
```

---

&nbsp;

## **Extensões requeridas:**

  - ### ESLint (<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>);
  - ### Prettier (<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>);
