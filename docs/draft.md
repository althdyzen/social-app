## Requisitos do projeto:

<h4 style="margin-bottom:.5rem;">✅ - Feito</h4>
<h4 style="margin-top:0;">❗ - Incompleto</h4>


- ✅ O projeto deve ser montado com, no mínimo, 2 pages, incluindo a home.page.html comum ao ionic. - 1 ponto - Diogo
  <!-- - [Home](/src/app/pages/home) -->
  - [Sign Up](/src/app/pages/signup)
  - [Sign In](/src/app/pages/signin)
  - [Feed](/src/app/pages/feed)
  - [User](/src/app/pages/user)

- ✅ O projeto deve ter o uso da biblioteca HttpClient - 1 ponto - Diogo
  - [API Service](/src/app/services/api/api.service.ts#HttpClient)

- ✅ Uma API deve ser usada (de escolha aberta, exceto o pokeapi, a não ser que se faça alguma coisa diferente da minha aula). Tem que haver, no mínimo, um método get. - 1 ponto - Sylvio
  - [API Service](/src/app/services/api/api.service.ts#getUser)

- ✅ O projeto deve ter, no mínimo, dois pipes, UM personalizado e UMA pipe builtin. - 2 pontos - Sylvio
  - [Uppercase](/src/app/pages/signup/signup.page.html#uppercase)
  - [Nick](/src/app/pipes/nick/nick.pipe.ts)
  - [Post date](/src/app/pipes/post-date/post-date.pipe.ts)

- ✅ O projeto deve ter, no mínimo, um service para alocar o uso do HttpClient. - 2 pontos - Gabriel
  - [API Service](/src/app/services/api/api.service.ts)

- ✅ O projeto deve ter, no mínimo, UMA diretivas personalizadas e duas diretivas estruturais (ngIf e ngFor). - 3 pontos - Gabriel
  - [ngFor](/src/app/pages/feed/feed.page.html#ngFor)
  - [ngIf](/src/app/pages/feed/feed.page.html#ngIf)
  - [ExpandOnClick](/src/app/directives//expand-onclick/expand-onclick.directive.ts#ExpandOnclickDirective)


## Extras

- ✅ Montar uma terceira tela que use transferência de parâmetros por rotas - 1 ponto (routerLink, ou biblioteca navigate) - Yasmin
  - [Searchbar](/src/app/components/search-bar/search-bar.component.html#routerLink) > [UserPage](/src/app/pages/user/user.page.ts)

- ✅ Integrar com backend - 1 ponto - Yasmin
  - [API Service](/src/app/services/api/api.service.ts)

- ✅ Pagination - 1 ponto - Mariana
  - [UserPage](/src/app/pages/user/user.page.html#paginate)

- ✅ Criar uma funcionalidade diferente além de capturar os dados de uma API (um segundo service) - 1 ponto - Mariana
  - [ToastService](/src/app/services/toast/toast.service.ts)
