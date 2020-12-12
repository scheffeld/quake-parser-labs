# Quake Parser - Desafio Técnico
### Tasks

1. Construa um `parser` que leia o arquivo `games.log`, interprete e agrupe os dados de cada partida registrada no log.
2. Apartir do `parser`, exponha através de uma API, os dados coletados em formato JSON.

### Requisitos

- [x] A API devera seguir o padrão RESTful com formato JSON.
- [x] Suite de testes (unitários e de integração).
- [x] Usar o GitHub e realizar commits granulares e descritivos.
- [x] README explicando o Setup e a solução proposta.


### Setup

<b>Instalação</b>

```console
rogerscheffeld@mbp:˜$ yarn install
```

<b>Execução</b>

Ambiente de desenvolvimento
```console
rogerscheffeld@mbp:˜$ yarn dev
```
[http://localhost:3333](http://localhost:3333/)

Ambiente de produção
```console
rogerscheffeld in quake-parser-labs
> yarn start
```

<b>Testes</b>

```console
rogerscheffeld in quake-parser-labs
> yarn test
```

### Resposta

A resposta deve seguir o exemplo a baixo:

```JSON
{
    "game_1": {
        "total_kills": 0,
        "players": [
            "Isgalamido"
        ],
        "kills": {
            "Isgalamido": 0
        }
    },
    "game_2": {
        "total_kills": 11,
        "players": [
            "Isgalamido",
            "Dono da Bola",
            "Mocinha"
        ],
        "kills": {
            "Isgalamido": -7,
            "Dono da Bola": 0,
            "Mocinha": 0
        }
    }
}
```