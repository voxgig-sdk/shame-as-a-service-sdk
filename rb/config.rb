# ShameAsAService SDK configuration

module ShameAsAServiceConfig
  def self.make_config
    {
      "main" => {
        "name" => "ShameAsAService",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://shame-as-a-service.vercel.app",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_shame_message" => {},
        },
      },
      "entity" => {
        "get_shame_message" => {
          "fields" => [
            {
              "name" => "country",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "detected_from_ip",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "ip",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "message",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "get_shame_message",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "usa",
                        "kind" => "query",
                        "name" => "country",
                        "orig" => "country",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/",
                  "select" => {
                    "exist" => [
                      "country",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "parts" => [],
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ShameAsAServiceFeatures.make_feature(name)
  end
end
