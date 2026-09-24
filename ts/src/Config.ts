
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Country",
          "type": "`$STRING`",
          "req": true,
          "short": "The country code for which the shame message was generated"
        },
        {
          "name": "detectedFromIp",
          "title": "Detected From Ip",
          "type": "`$BOOLEAN`",
          "short": "Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)"
        },
        {
          "name": "ip",
          "title": "Ip",
          "type": "`$STRING`",
          "short": "The IP address of the requester (when available)"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true,
          "short": "The shame message tailored to the specified or detected country"
        }
      ],
      "name": "get_shame_message",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "segments": [],
              "parts": [],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "usa"
                  }
                ]
              },
              "select": {
                "exist": [
                  "country"
                ]
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
  config,
  FEATURE_PLUGINS,
}

