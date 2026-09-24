
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShameAsAServiceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ShameAsAServiceSDK.test()
    equal(testsdk instanceof ShameAsAServiceSDK, true,
      'ShameAsAServiceSDK.test() must return a client synchronously')
  })

})
