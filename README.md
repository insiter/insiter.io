# INSITER - Inside the Web - Teresina - PI

Foi utilizado, como base, a estrutura do [Conf Boilerplate](https://github.com/braziljs/conf-boilerplate/). Ela utiliza o [DocPad](https://github.com/bevry/docpad), um static generator em NodeJS, para criar o sites de forma rápida e simples. Ele auxilia no deploy para o [GitHub Pages](http://pages.github.com) que, além de ser gratuito, permite utilizar domínio próprio *(mais informações sobre isso em [Deploy](#domnio-personalizado))*.

Por padrão, a estrutura possui as seguintes seções:

* *About* - Descreve o objetivo do evento.
* *Location* - Exibe a localização do evento através do Google Maps.
* *Speakers* - Lista informações sobre os palestrantes.
* *Schedule* - Mostra a agenda do evento.
* *Sponsors* - Permite fazer propaganda dos patrocinadores.
* *Partners* - Permite fazer propaganda dos apoiadores.

## Quick Start

Pré-requisitos:
  * [Git](http://git-scm.com/downloads)
  * [NodeJS](http://nodejs.org/download/)

1. Instalar [Git](http://git-scm.com/downloads) e [NodeJS](http://nodejs.org/download/), caso você não os tenha ainda.

2. Clone o repositório:

    ```sh
    $ git clone git://github.com/insiter/insiter.io.git
    ```
3. Vá para pasta do projeto:

    ```sh
    $ cd insiter.io
    ```

4. Instale todas as dependências:

    ```sh
    $ npm install
    ```

5. E finalmente rode:

    ```sh
    $ npm run watch
    ```
   Agora você irá ver o site rodando em `localhost:9778` :D

6. Quando terminar de editar e quiser publicar o site no GitHub Pages:

    ```sh
    $ npm run deploy
    ```

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

```
.
|-- out/
|-- src/
|   |-- documents
|   |   |-- assets
|   |-- files
|   |-- layouts
|   |-- partials
|   |   |-- css
|   |   |-- html
|-- docpad.js
|-- package.json
```

### out/

Onde os arquivos gerados são armazenados, uma vez que o DocPad tenha sido rodado. Esse diretório se torna desnecessário no versionamento, por isso está ignorado ([.gitignore](https://github.com/insiter/insiter.io/blob/master/.gitignore)).

### [src/documents](https://github.com/insiter/insiter.io/blob/master/src/documents)

Contém o arquivo responsável por importar todas as seções da aplicação. Além disso contém os assets com todos os arquivos como imagens, arquivos CSS e JS.

### [src/files](https://github.com/insiter/insiter.io/blob/master/src/files)

Arquivos que devem ficar na raíz do projeto, como `manifest.json` e `CNAME`, devem ficar nesse diretório.

### [src/layouts](https://github.com/insiter/insiter.io/tree/master/src/layouts)

Contém o template padrão da aplicação.

### [src/partials](https://github.com/insiter/insiter.io/tree/master/src/partials)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/insiter/insiter.io/blob/master/src/documents/index.html.eco)).

Foram divididas em partials para `CSS` e `HTML`. Arquivos LESS, que são partes de um arquivo maior, devem ficar nas partials para CSS.

### [docpad.js](https://github.com/insiter/insiter.io/blob/master/docpad.js)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [package.json](https://github.com/insiter/insiter.io/blob/master/package.json)

Lista as dependências de módulos do NodeJS.

## Customização

A maioria das alterações do projeto basta ir até o `docpad.js` e alterar o valor das variáveis.

### Informações básicas sobre a conferência

Quer alterar o nome, data, endereço, cidade ou preço do evento? É só mudar.

```
conf:
    name: "Conference name"
    description: "Conference description"
    date: "November 15"
    price: "$100"
    address: "Boulevard Kukulcan, 30, México"
    venue: "Coco Bongo"
    city: "Cancún"
```

### Informações básicas sobre o site

Quer mudar a imagem de capa, código do Google Analytics ou o favicon? Vá em frente!

```
site:
    url: "http://braziljs.github.io/conf-boilerplate/"
    googleanalytics: "UA-33656081-1"
```

### Seções ativas

Ainda não definiu a programação completa do evento? Não tem problema, basta comentar a linha `schedule` (usando `#`).

Ainda não sabe quem irá palestrar? Tudo bem, basta comentar a linha `speakers` (usando `#`).

E por aí vai.

```
sections: [
  "about"
  "location"
  #"speakers"
  #"schedule"
  "sponsors"
  "partners"
  "contact"
]
```

Você ainda pode trocar a order em que eles aparecem na página e na navegação ao trocar a order das linhas também!

### Labels (i18n)

Se você quiser usar palavras diferentes do padrão ou diferentes línguas
é só trocar o valor das labels correspondentes:

```
labels:
  about: "Sobre"
  location: "Localização"
  speakers: "Palestrantes"
  schedule: "Agenda"
  sponsors: "Patrocinadores"
  partners: "Parceiros"
  contact: "Contato"
```

Você ainda pode usar esse objeto para definir outras labels que você gostaria de acessar nos seus templates.

### Lista de Palestrantes

Para incluir/alterar/excluir um palestrante também é igualmente simples, basta recorrer ao `schedule`.

```
schedule: [
    name: "Chuck Norris"
    photo: "http://f.cl.ly/items/2A3p1N0C3c0n3N3R1w2B/speaker.jpg"
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    company: "Delta Command"
    twitter: "littlechuck"
    presentation:
        title: "How to kill a elephant with one finger"
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        time: "13h00"
]
```

Quer listar mais algum atributo do palestrante que não está ali? Tudo bem, é só adicionar no `docpad.js` e depois exibí-lo com `<%= speaker.seuNovoAtributo %>` no [speakers.html.eco](https://github.com/insiter/insiter.io/blob/master/src/partials/html/section/speakers.html.eco).

### Lista de outros itens da Agenda

Para alterar os horários de check-in, almoço e coffee-break, é só recorrer as variáveis de `schedule`.

```
schedule: [
    name: "Check-in / Breakfast"
    time: "9h00"
]
```

Mas se você quiser adicionar mais um coffee-break ou qualquer outro tipo de item na agenda do evento, é só acrescentar mais um item nessa lista.

### Lista de Patrocinadores/Apoio

Para adicionar qualquer patrocinador ou apoio no evento, é só recorrer as variáveis `sponsors` e `partners`.

```
partners: [
    name: "Codeminer42"
    logo: "http://s3.amazonaws.com/cm42_prod/assets/codeminer-main-logo-d21d308bd16f2bedef1ce73eeb82ecdf.png"
    url: "http://www.codeminer42.com/"
]
```

## Deploy

Foi utilizado o recurso do [GitHub Pages](http://pages.github.com) que ainda é gratuito. Para realizar o deploy basta rodar:

```sh
$ npm run deploy
```

Espere alguns minutos até que o GitHub lhe envie um e-mail avisando que tudo ocorreu bem. Depois é só acessar: `http://insiter.github.io/insiter.io`
