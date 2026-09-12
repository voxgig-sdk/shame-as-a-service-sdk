
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ShameAsAService',
        slug: "shame-as-a-service",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "The country code for which the shame message was generated",
          "type": "`$STRING`"
        },
        {
          "name": "detectedFromIp",
          "short": "Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "ip",
          "short": "The IP address of the requester (when available)",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "req": true,
          "short": "The shame message tailored to the specified or detected country",
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
              "segments": [],
              "select": {
                "exist": [
                  "country"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": []
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
  config,
  FEATURE_PLUGINS,
}

