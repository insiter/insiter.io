# INSITER.IO

## Seções
Seções a serem feitas:

- [ ] Header
- [ ] Hero
- [ ] Sobre
- [ ] Palestrantes
- [ ] Programação
- [ ] Local
- [ ] Patrocinadores & Parceiros

## Quick Start - Docker

Pré-requisitos:

  * [Docker](http://www.docker.com)
  * [docker-compose](https://docs.docker.com/compose/)

1. Clone o repositório:

    ```sh
    $ git clone git://github.com/insiter/insiter.io.git
    ```

2. Vá para pasta do projeto:

    ```sh
    $ cd insiter.io
    ```

3. Crie a imagem usando docker-compose:

    ```sh
    $ docker-compose build
    ```

3. Instale todas as dependências:

    ```sh
    $ docker-compose run --rm web yarn install
    ```

5. E finalmente rode:

    ```sh
    $ docker-compose up web
    ```

Agora você irá ver o site rodando em [http://localhost:4567/](http://localhost:4567/).

## Quick Start

Pré-requisitos:
  * [Git](http://git-scm.com/downloads/)
  * [Ruby](https://www.ruby-lang.org/en/downloads/)
  * [NodeJS](http://nodejs.org/download/)

1. Clone o repositório:

    ```sh
    $ git clone git://github.com/insiter/insiter.io.git
    ```
2. Vá para pasta do projeto:

    ```sh
    $ cd insiter.io
    ```

3. Instale todas as dependências:

    ```sh
    $ bundle install && npm install
    ```

4. E finalmente rode:

    ```sh
    $ middleman serve
    ```
   Agora você irá ver o site rodando em `localhost:4567` :D
