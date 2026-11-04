<div align="center">

<img src="assets/banner.svg" alt="API de Transações" width="100%">

<br>
<br>

**API REST para registrar transações, feita com Node.js e TypeScript.**

<br>

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-f59e0b?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-24-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Knex](https://img.shields.io/badge/Knex-3-D26B38?style=for-the-badge&logo=knexdotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Licença](https://img.shields.io/badge/licen%C3%A7a-ISC-2dd4bf?style=for-the-badge)

[Tecnologias](#-tecnologias) •
[Como executar](#-como-executar) •
[Rotas](#-rotas) •
[Banco de dados](#-banco-de-dados) •
[Estrutura](#-estrutura-do-projeto)

</div>

---

> [!NOTE]
> **Em desenvolvimento:** o servidor, a conexão com o banco e as migrations já estão prontos. As rotas de transações ainda não foram criadas.

> ### 🧰 Tecnologias

- [Node.js](https://nodejs.org/) e [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/): servidor HTTP
- [Knex](https://knexjs.org/): query builder e migrations
- [SQLite](https://www.sqlite.org/): banco de dados
- [tsx](https://tsx.is/): execução do TypeScript em desenvolvimento
- [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/): qualidade e formatação do código

> ### 📋 Pré-requisitos

- Node.js 24 (versão usada no desenvolvimento)
- [pnpm](https://pnpm.io/)

> ### 🚀 Como executar

```bash
# 1. Instale as dependências
pnpm install

# 2. Crie o banco e aplique as migrations
pnpm knex migrate:latest

# 3. Inicie o servidor em modo de desenvolvimento
pnpm dev
```

O servidor fica disponível em `http://localhost:3000`.

Para usar outra porta, defina a variável `PORT` ao iniciar:

```bash
PORT=3333 pnpm dev
```

> ### 📜 Scripts

| Comando          | Descrição                                               |
| ---------------- | ------------------------------------------------------- |
| `pnpm dev`       | Inicia o servidor e reinicia a cada alteração no código |
| `pnpm build`     | Compila o TypeScript para a pasta `dist`                |
| `pnpm start`     | Executa a versão compilada                              |
| `pnpm typecheck` | Verifica os tipos sem gerar arquivos                    |
| `pnpm knex`      | Executa a CLI do Knex                                   |

> ### 🧭 Rotas

| Método | Rota     | Descrição                                                               |
| ------ | -------- | ----------------------------------------------------------------------- |
| `GET`  | `/hello` | Rota de teste: lista as tabelas e os índices do banco (`sqlite_schema`) |

> ### 💾 Banco de dados

O banco é um arquivo SQLite em `db/app.db`, criado ao rodar as migrations e ignorado pelo Git.

> ### 🧾 Tabela `transactions`

| Coluna       | Tipo            | Regras                               |
| ------------ | --------------- | ------------------------------------ |
| `id`         | `uuid`          | Chave primária                       |
| `session_id` | `uuid`          | Opcional, com índice                 |
| `title`      | `text`          | Obrigatório                          |
| `amount`     | `decimal(10,2)` | Obrigatório                          |
| `created_at` | `timestamp`     | Obrigatório, padrão: data/hora atual |

> ### 🔄 Migrations

```bash
# Criar uma nova migration
pnpm knex migrate:make nome-da-migration

# Aplicar as migrations pendentes
pnpm knex migrate:latest

# Desfazer o último lote de migrations
pnpm knex migrate:rollback

# Listar as migrations aplicadas e pendentes
pnpm knex migrate:list
```

> ### 📁 Estrutura do projeto

```text
.
├── assets/
│   └── banner.svg      # Banner do README
├── db/
│   └── migrations/     # Migrations do Knex
├── src/
│   ├── database.ts     # Configuração e conexão do Knex
│   └── server.ts       # Servidor Fastify e rotas
├── eslint.config.mjs   # Configuração do ESLint
├── knexfile.ts         # Configuração usada pela CLI do Knex
├── .prettierrc.json    # Configuração do Prettier
└── tsconfig.json       # Configuração do TypeScript
```

> ### 📄 Licença

ISC
