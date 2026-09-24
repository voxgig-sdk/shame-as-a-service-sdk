

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"The country code for which the shame message was generated","t":"`$STRING`","key$":"country","index$":0},"detectedFromIp":{"a":true,"h":"Detected From Ip","n":"detectedFromIp","r":false,"sh":"Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)","t":"`$BOOLEAN`","key$":"detectedFromIp","index$":1},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"The IP address of the requester (when available)","t":"`$STRING`","key$":"ip","index$":2},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"The shame message tailored to the specified or detected country","t":"`$STRING`","key$":"message","index$":3}},"name":"get_shame_message","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"usa","k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/","q":{"exist":["country"]},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_shame_message","name__orig":"get_shame_message","Name":"GetShameMessage","name_":"get_shame_message","name-":"get-shame-message","NAME":"GET_SHAME_MESSAGE","index$":0}, {"active":true,"entity":"get_shame_message","key$":"BasicGetShameMessageFlow","kind":"basic","name":"BasicGetShameMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_shame_message_ref01","srcdatavar":"get_shame_message_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_shame_message_ref01"}}],"index$":0}]}, 'GetShameMessage', {"GET /":{"protocol":"http","operationId":"getShameMessage","responses":{"200":{"description":"Successfully returned a shame message","content":{"application/json":{"schema":{"type":"object","required":["message","country"],"properties":{"message":{"description":"The shame message tailored to the specified or detected country","example":"Shame on you! Your code has more bugs than a Silicon Valley startup has pivots.","key$":"message","type":"string"},"country":{"description":"The country code for which the shame message was generated","example":"usa","key$":"country","type":"string"},"ip":{"description":"The IP address of the requester (when available)","example":"192.168.1.1","key$":"ip","type":"string"},"detectedFromIp":{"description":"Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)","example":true,"key$":"detectedFromIp","type":"boolean"}},"x-ref":"#/components/schemas/ShameResponse","index$":0},"examples":{"withCountryParam":{"summary":"Shame message with country parameter","value":{"message":"Shame on you! Your code has more bugs than a Silicon Valley startup has pivots.","country":"usa","ip":"192.168.1.1","detectedFromIp":false}},"autoDetected":{"summary":"Shame message with auto-detected country","value":{"message":"Shame! Your code is more broken than a Mumbai local train during rush hour.","country":"india","ip":"192.168.1.1","detectedFromIp":true}}}}}},"429":{"description":"Rate limit exceeded - too many requests","content":{"application/json":{"schema":{"type":"object","required":["statusCode","message"],"properties":{"statusCode":{"type":"integer","description":"HTTP status code","example":429},"message":{"type":"string","description":"Error message","example":"Too Many Requests"},"error":{"type":"string","description":"Detailed error description","example":"Rate limit exceeded. Maximum 200 requests per minute per IP."}},"x-ref":"#/components/schemas/ErrorResponse"},"example":{"statusCode":429,"message":"Too Many Requests","error":"Rate limit exceeded. Maximum 200 requests per minute per IP."}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","required":["statusCode","message"],"properties":{"statusCode":{"type":"integer","description":"HTTP status code","example":429},"message":{"type":"string","description":"Error message","example":"Too Many Requests"},"error":{"type":"string","description":"Detailed error description","example":"Rate limit exceeded. Maximum 200 requests per minute per IP."}},"x-ref":"#/components/schemas/ErrorResponse"},"example":{"statusCode":500,"message":"Internal server error","error":"An unexpected error occurred"}}}}},"parameters":[{"name":"country","in":"query","description":"Optional country code to get country-specific shame messages. Supported values: usa, india, china, uk, germany, japan, brazil, russia, france, canada, australia, south-korea, mexico, spain, italy, poland","required":false,"schema":{"type":"string","enum":["usa","india","china","uk","germany","japan","brazil","russia","france","canada","australia","south-korea","mexico","spain","italy","poland"],"example":"usa"},"index$":0}],"securitySource":"unspecified"}})
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
  
