
# Easy Calendar

Aplicação integrada com google calendar, com intuito do usuário criar um calendário de disponibilidades para que outros colegas marquem meeting totalmente automatizado.


## Demonstração

![Captura de tela de 2023-02-04 11-12-24](https://user-images.githubusercontent.com/86208458/216773145-3ee2f25e-154e-44c8-9871-d5e4a8e20ce5.png)

## Roadmap

- Conexão com o planetscale

- Integração com o nextAuth

- Integração com o google calendar


## Stack utilizada

**Front-end:** NextJS, NextAuth, next-seo, zod
 
**Back-end:** Node, NextAuth, Prisma, zod 


## Aprendizados

Aprendi uma nova arquitetura de pastas para aplicação serverless dentro do nextjs, novas querys incríveis com o prisma e até mesmo com MYSQL (um susto para um frontend haha)

Conceitos novos de manipulação e transformação de dados como zod, tanto no backend quanto no frontend.

Aprendi conceitos avançados do next-auth, uma ferramenta que eu já estava de olho a um tempo para começar a aplicar em projetos pessoais, 
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/HigorAln/Easy-calendar.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências (utilizei o pnpm)

```bash
  pnpm install
```

Preencha a .env

```bash
  # url seu do banco mysql
  DATABASE_URL
  # ID cadastrado na sua aplicacao OAuth do google
  GOOGLE_CLIENT_ID // 
  # SECRET cadastrado na sua aplicacao OAuth do google
  GOOGLE_CLIENT_SECRET //
```

Inicie o servidor

```bash
  pnpm dev
```


## Screenshots

![scheduling-img](https://user-images.githubusercontent.com/86208458/216773150-bab033cd-c286-4a29-9bdb-d649dd6f3460.png)


## Autores

- [@higoraln](https://www.github.com/higoraln)

