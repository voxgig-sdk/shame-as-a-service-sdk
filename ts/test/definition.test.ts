import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "get_shame_message",
    "accessor": "GetShameMessage",
    "op": "load",
    "method": "GET",
    "path": "/",
    "args": [],
    "select": {
      "country": "usa"
    },
    "headers": [],
    "query": [
      "country"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "message": "Shame on you! Your code has more bugs than a Silicon Valley startup has pivots.",
      "country": "usa",
      "ip": "192.168.1.1",
      "detectedFromIp": false
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
