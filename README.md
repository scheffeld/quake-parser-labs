# Quake Parser

## Sobre

Quake Parser é um parser para processar os dados de um log do jogo Quake 3 Atena. Esse parser lê, processa e agrupa os dados de cada partida do jogo, retornando um JSON com os dados processados.

## Setup

### Instalação

```console
$ npm install
```

### Execução

<b>Ambiente de desenvolvimento</b>
```console
$ npm dev
```

<b>Ambiente de produção</b>
```console
$ npm start
```

### Testes

```console
$ npm test
```

## Endpoints

### GET: /api/v1/healthcheck

Endpoint para monitorar a saúde da aplicação.

<b>Resposta</b>

```JSON
{
  "uptime": 4.496053299,
  "status": "UP",
  "port": 3001,
  "timestamp": 1607812833792
}
```

### GET: /api/v1/games

Endpoint que retorna um JSON com os dados de todos as partidas registradas no log do Quake 3 Arena.

#### Resposta

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

### GET: /api/v1/games/:id

Endpoint que retorna um JSON com os dados de uma partida especifica registrada no log do Quake 3 Arena.

#### Resposta

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
    }
}
```