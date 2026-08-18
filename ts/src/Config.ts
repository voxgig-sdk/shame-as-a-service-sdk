
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ShameAsAService',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://shame-as-a-service.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_shame_message: {
      },

    }
  }


  entity = {
    "get_shame_message": {
      "fields": [
        {
          "name": "country",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "detectedFromIp",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "ip",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "parts": [],
              "select": {
                "exist": [
                  "country"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

