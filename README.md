# Site-cogitare

## SPA

Uma SPA (Single Page Application) é uma aplicação web que carrega todo o seu conteúdo e funcionalidade em uma única página, sem a necessidade de recarregar a página inteira ao navegar. Em vez disso, a página atualiza dinamicamente o conteúdo relevante usando JavaScript, proporcionando uma experiência mais rápida e fluida, semelhante a um aplicativo de desktop. Exemplos notáveis incluem o Gmail e o Facebook. 

## React

React é uma biblioteca JavaScript criada pelo Facebook (Meta) para a construção de interfaces de usuário (UIs) interativas e dinâmicas, especialmente para aplicativos web de página única e aplicativos móveis com o React Native. Ela facilita o desenvolvimento de aplicações web ao permitir a criação de componentes reutilizáveis e atualizações eficientes da página através da manipulação do Virtual DOM, o que resulta em melhor desempenho e uma experiência de usuário mais fluida. 

## React-Router

O React Router é uma biblioteca essencial em React que permite criar a navegação entre diferentes "páginas" ou componentes em uma aplicação de página única (SPA), sem a necessidade de recarregar a página inteira no navegador. Ele gerencia a sincronização da URL do navegador com os componentes exibidos na tela, proporcionando uma experiência de usuário mais fluida e ágil, semelhante a sites tradicionais, mas com a eficiência de uma SPA. 

## Supabase

Supabase é uma plataforma de Backend como Serviço (BaaS) de código aberto que oferece um conjunto de ferramentas para o desenvolvimento de aplicações web e móveis, incluindo um banco de dados PostgreSQL, autenticação de usuários, armazenamento de arquivos e APIs RESTful automáticas. É frequentemente considerada uma alternativa ao Firebase e é construída sobre ferramentas como PostgreSQL e PostgREST, simplificando a criação de backends com o poder de bancos de dados SQL. 

## supabase/supabase.js

É a biblioteca JavaScript oficial para interagir com o serviço Supabase, uma plataforma de desenvolvimento open-source que oferece funcionalidades de backend como banco de dados (PostgreSQL), autenticação de usuários, APIs instantâneas, armazenamento, e outros recursos para criar aplicações web e móveis. Ela permite que desenvolvedores acessem e manipulem dados e serviços de um projeto Supabase diretamente do seu código JavaScript, usando uma abordagem que é familiar aos desenvolvedores de aplicações modernas. 
### Ela te permite:
* Gerenciar dados
* Autenticar usuarios
* Realizar operações em tempo real
* Armazenar arquivos
* Usar funções Edge
* Interações com TypeScript

## Integração supabase e Web

A integração Supabase e Web envolve usar a base de dados e as funcionalidades de backend do Supabase para uma aplicação web, geralmente de forma mais rápida através de plataformas de desenvolvimento visual como Hostinger Horizons e WeWeb, ou de forma mais programática, utilizando os SDKs e APIs do Supabase em frameworks como React (que a utilizada nesse repositório). 

## Integração Supabase + FlutterFlow + Website

A integração entre FlutterFlow, Supabase e um website ocorre ao conectar o projeto FlutterFlow às configurações de API do Supabase, inserindo a URL e a Chave Anon do Supabase no FlutterFlow(presente na pasta 'utils', como arquivo 'supabase.js'). O FlutterFlow então é configurado para usar o Supabase como backend para autenticação, armazenamento e recuperação de dados, com as tabelas do Supabase sendo sincronizadas no FlutterFlow, permitindo que o website, construído no FlutterFlow, acesse e gerencie esses dados. 

### Como foi feito:
* Configuração do projeto Supabase
* Conexão do FlutterFlow e Supabase(usando as ANON KEYS, presentes no supabase.project)
* Desnvolvimento do website(que é este presente neste repositório)
* Acesso e gerenciamento dos dados(tudo ocorre no supabase)
