# ShameAsAService SDK configuration


def make_config():
    return {
        "main": {
            "name": "ShameAsAService",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://shame-as-a-service.vercel.app",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_shame_message": {},
            },
        },
        "entity": {
      "get_shame_message": {
        "fields": [
          {
            "active": True,
            "name": "country",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "detected_from_ip",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ip",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "get_shame_message",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "usa",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/",
                "parts": [],
                "select": {
                  "exist": [
                    "country",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
