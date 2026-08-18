# ShameAsAService SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "country",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "detectedFromIp",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ip",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "get_shame_message",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "usa",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
