# ShameAsAService SDK configuration

module ShameAsAServiceConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ShameAsAService",
        "slug" => "shame-as-a-service",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://shame-as-a-service.vercel.app",
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
              "short" => "The country code for which the shame message was generated",
              "type" => "`$STRING`",
            },
            {
              "name" => "detectedFromIp",
              "short" => "Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "ip",
              "short" => "The IP address of the requester (when available)",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "req" => true,
              "short" => "The shame message tailored to the specified or detected country",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_shame_message",
          "op" => {
            "load" => {
              "input" => "data",
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
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "country",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
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
