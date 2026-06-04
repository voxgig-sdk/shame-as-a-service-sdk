# ShameAsAService SDK

Get a country-specific shame message based on your IP geolocation

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Shame as a Service

Shame as a Service is a small NestJS-powered API that returns a humorous, country-themed shame message based on the caller's IP geolocation. The service is hosted on Vercel at [shame-as-a-service.vercel.app](https://shame-as-a-service.vercel.app).

What you get from the API:

- A JSON response with `message` (the shame quote), `country` (the detected country, or `unknown`), and `ip` (the resolved caller IP)
- Country detection driven by the requesting IP address
- A single GET endpoint at the service root

Operational notes: the service is publicly reachable without authentication. CORS is reported as disabled, so browser-based callers may need a proxy. Because country selection depends on the caller IP, requests from servers, CDNs, or VPN exit nodes can return `unknown` or a country that does not match the end user.

## Try it

**TypeScript**
```bash
npm install shame-as-a-service
```

**Python**
```bash
pip install shame-as-a-service-sdk
```

**PHP**
```bash
composer require voxgig/shame-as-a-service-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/shame-as-a-service-sdk/go
```

**Ruby**
```bash
gem install shame-as-a-service-sdk
```

**Lua**
```bash
luarocks install shame-as-a-service-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ShameAsAServiceSDK } from 'shame-as-a-service'

const client = new ShameAsAServiceSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o shame-as-a-service-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "shame-as-a-service": {
      "command": "/abs/path/to/shame-as-a-service-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetShameMessage** | Returns a single shame message tailored to the caller's detected country, with the message, country code, and resolved IP in the JSON body. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from shameasaservice_sdk import ShameAsAServiceSDK

client = ShameAsAServiceSDK({})


# Load a specific getshamemessage
getshamemessage, err = client.GetShameMessage(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'shameasaservice_sdk.php';

$client = new ShameAsAServiceSDK([]);


// Load a specific getshamemessage
[$getshamemessage, $err] = $client->GetShameMessage(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/shame-as-a-service-sdk/go"

client := sdk.NewShameAsAServiceSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ShameAsAService_sdk"

client = ShameAsAServiceSDK.new({})


# Load a specific getshamemessage
getshamemessage, err = client.GetShameMessage(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("shame-as-a-service_sdk")

local client = sdk.new({})


-- Load a specific getshamemessage
local getshamemessage, err = client:GetShameMessage(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ShameAsAServiceSDK.test()
const result = await client.GetShameMessage().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ShameAsAServiceSDK.test(None, None)
result, err = client.GetShameMessage(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ShameAsAServiceSDK::test(null, null);
[$result, $err] = $client->GetShameMessage(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetShameMessage(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ShameAsAServiceSDK.test(nil, nil)
result, err = client.GetShameMessage(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetShameMessage(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Shame as a Service

- Upstream: [https://shame-as-a-service.vercel.app](https://shame-as-a-service.vercel.app)
- API docs: [https://freepublicapis.com/shame-as-a-service](https://freepublicapis.com/shame-as-a-service)

- Released under the MIT licence
- Free for personal and commercial use with attribution to the project
- Provided as-is with no warranty

---

Generated from the Shame as a Service OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
