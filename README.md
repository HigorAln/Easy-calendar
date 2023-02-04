
# Easy Calendar

Aplicação integrada com google calendar, com intuito do usuário criar um calendário de disponibilidades para que outros colegas marquem meeting totalmente automatizado.


## Demonstração

![Imagem da home do Easy Calendar](https://lh3.googleusercontent.com/fife/AMPSemeZ04FBv1xddjUSZz5Uz1QzZ4bDOnJKT7ltxtlD8J4WXyJPnsEgyLUntyX4uDAQzR7HlShKA0REUux-WXyTgtQMMKahaOAPXCekzJ91JBT2nCBRlDgKKt8_pZZfLjfkquSfiLpOkHYQAbMp5vNweshqWkjR8DITtGE-3L4TvY_BXJHx3xdsAsof8_QwkKQcSxzoyR5UpjW4kcLKBjzv7wGz8Q7eAlx-gibBYsaz4KD1Vdo7L7xJoutMBjyeGZqDoPUIvYYusYz0NobqJIF4bbECvI5_emPb3c68mtmyDeZK_QkvcN0ETQ2v_IMV6X4xNmBzyefVerMr7LM0w-FXYinQYd9cSdW-rbwe6NQoVFLfkOm23XnBcsSMLvLTBCt_gouDfR490If7GUeP9r1m03___lEbqaiOnPBWU7QUgKlK57dk2Qhr6CDOodxr7j15XrNxzvOTosW0SwWQH8ms8pKhDuHJz6j6fRWFmej9PFkHaEnSams73CUhDp-I29xesM0OqEF7sKNvbsa8qS0QglSZePCIGPNvTwa6-oZmoswWAOlenWByhrD7fxQKL1_VDg3RlZuV0kY2s4Z1ktRn_O80MYJ3dH1p1CZqbhbhIlb8IMH4h5tCgNiZHUm1bGuQFYpMIDtN1EcbZrmeHJlQQXICHfxg6WtcOqyN2bsyrgivxwmEzEWtZGuZ9FRed2S-hrBCfIqBG-uMrAtDXSiIobR0lfOfNRqTgyPI6BCh5Jyv7pm35EbAwdpZSVu57ae7MJb_oksJQ8S99rreLaaz1myev8THUOnHZLii8BL3j_0ZOF5gOrIipNTAZv6XhRNw1ssT8Om3bbnsCAaJHA8zZSpclNrCsJSRBI8oVDKTqZ2eNjLkhCgv32hGhPsFgXpuo-CqNGAQ3tIBUqAtux-n5FmW1Hq0BpP3FxxXdTtwubgFgC98Cai-m1XKtotJelwk5B8=w1920-h983)


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

![Schedule screenshot](/public/scheduling-img.png)


## Autores

- [@higoraln](https://www.github.com/higoraln)

