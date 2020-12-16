# Quake Parser
### Setup

<b>Instalação</b>

```console
$ npm install
```

<b>Execução</b>

Ambiente de desenvolvimento
```console
$ npm dev
```

Ambiente de produção
```console
$ npm start
```

<b>Testes</b>

```console
$ npm test
```

### Endpoints

#### GET: /api/v1/healthcheck

Endpoint para monitorar a saúde da aplicação.

<b>Resposta</b>

```JSON
{
  "uptime": 4.496053299,
  "message": "UP",
  "timestamp": 1607812833792
}
```

#### GET: /api/v1/games

Endpoint que retorna um JSON com os dados de todos as partidas registradas no log do Quake 3 Arena.

<b>Resposta</b>

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

#### GET: /api/v1/games/:id

Endpoint que retorna um JSON com os dados de uma partida especifica registrada no log do Quake 3 Arena.

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