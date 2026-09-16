

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ShameAsAServiceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetShameMessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SHAME_AS_A_SERVICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('SHAME_AS_A_SERVICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ShameAsAServiceSDK.test()
    const ent = testsdk.GetShameMessage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SHAME_AS_A_SERVICE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_shame_message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"country","req":true,"short":"The country code for which the shame message was generated","type":"`$STRING`","index$":0},{"active":true,"name":"detectedFromIp","req":false,"short":"Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"ip","req":false,"short":"The IP address of the requester (when available)","type":"`$STRING`","index$":2},{"active":true,"name":"message","req":true,"short":"The shame message tailored to the specified or detected country","type":"`$STRING`","index$":3}],"name":"get_shame_message","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"usa","kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getShameMessage\",\"parameters\":[{\"description\":\"Optional country code to get country-specific shame messages. Supported values: usa, india, china, uk, germany, japan, brazil, russia, france, canada, australia, south-korea, mexico, spain, italy, poland\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"enum\":[\"usa\",\"india\",\"china\",\"uk\",\"germany\",\"japan\",\"brazil\",\"russia\",\"france\",\"canada\",\"australia\",\"south-korea\",\"mexico\",\"spain\",\"italy\",\"poland\"],\"example\":\"usa\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"autoDetected\":{\"summary\":\"Shame message with auto-detected country\",\"value\":{\"country\":\"india\",\"detectedFromIp\":true,\"ip\":\"192.168.1.1\",\"message\":\"Shame! Your code is more broken than a Mumbai local train during rush hour.\"}},\"withCountryParam\":{\"summary\":\"Shame message with country parameter\",\"value\":{\"country\":\"usa\",\"detectedFromIp\":false,\"ip\":\"192.168.1.1\",\"message\":\"Shame on you! Your code has more bugs than a Silicon Valley startup has pivots.\"}}},\"schema\":{\"properties\":{\"country\":{\"description\":\"The country code for which the shame message was generated\",\"example\":\"usa\",\"type\":\"string\"},\"detectedFromIp\":{\"description\":\"Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)\",\"example\":true,\"type\":\"boolean\"},\"ip\":{\"description\":\"The IP address of the requester (when available)\",\"example\":\"192.168.1.1\",\"type\":\"string\"},\"message\":{\"description\":\"The shame message tailored to the specified or detected country\",\"example\":\"Shame on you! Your code has more bugs than a Silicon Valley startup has pivots.\",\"type\":\"string\"}},\"required\":[\"message\",\"country\"],\"type\":\"object\"}}},\"description\":\"Successfully returned a shame message\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Rate limit exceeded. Maximum 200 requests per minute per IP.\",\"message\":\"Too Many Requests\",\"statusCode\":429},\"schema\":{\"properties\":{\"error\":{\"description\":\"Detailed error description\",\"example\":\"Rate limit exceeded. Maximum 200 requests per minute per IP.\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"example\":\"Too Many Requests\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"required\":[\"statusCode\",\"message\"],\"type\":\"object\"}}},\"description\":\"Rate limit exceeded - too many requests\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"An unexpected error occurred\",\"message\":\"Internal server error\",\"statusCode\":500},\"schema\":{\"properties\":{\"error\":{\"description\":\"Detailed error description\",\"example\":\"Rate limit exceeded. Maximum 200 requests per minute per IP.\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"example\":\"Too Many Requests\",\"type\":\"string\"},\"statusCode\":{\"description\":\"HTTP status code\",\"example\":429,\"type\":\"integer\"}},\"required\":[\"statusCode\",\"message\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["country"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_shame_message","name__orig":"get_shame_message","Name":"GetShameMessage","name_":"get_shame_message","name-":"get-shame-message","NAME":"GET_SHAME_MESSAGE","index$":0}, {"active":true,"entity":"get_shame_message","key$":"BasicGetShameMessageFlow","kind":"basic","name":"BasicGetShameMessageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_shame_message_ref01","srcdatavar":"get_shame_message_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_shame_message_ref01"}}],"index$":0}]}, 'GetShameMessage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_shame_message_ref01_data = Object.values(setup.data.existing.get_shame_message)[0] as any

    // LOAD
    const get_shame_message_ref01_ent = client.GetShameMessage()
    const get_shame_message_ref01_match_dt0: any = {}
    const get_shame_message_ref01_data_dt0 = (await get_shame_message_ref01_ent.load(get_shame_message_ref01_match_dt0)).data()
    assert(null != get_shame_message_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_shame_message/GetShameMessageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ShameAsAServiceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_shame_message01','get_shame_message02','get_shame_message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SHAME_AS_A_SERVICE_TEST_GET_SHAME_MESSAGE_ENTID': idmap,
    'SHAME_AS_A_SERVICE_TEST_LIVE': 'FALSE',
    'SHAME_AS_A_SERVICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SHAME_AS_A_SERVICE_TEST_GET_SHAME_MESSAGE_ENTID']

  const live = 'TRUE' === env.SHAME_AS_A_SERVICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SHAME_AS_A_SERVICE_TEST_GET_SHAME_MESSAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ShameAsAServiceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SHAME_AS_A_SERVICE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
