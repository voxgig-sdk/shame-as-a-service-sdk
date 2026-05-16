
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShameAsAServiceSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ShameAsAServiceSDK.test()
    equal(null !== testsdk, true)
  })

})
