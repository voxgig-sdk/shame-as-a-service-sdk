-- ShameAsAService SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ShameAsAService",
      slug = "shame-as-a-service",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://shame-as-a-service.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_shame_message"] = {},
      },
    },
    entity = {
      ["get_shame_message"] = {
        ["fields"] = {
          {
            ["name"] = "country",
            ["req"] = true,
            ["short"] = "The country code for which the shame message was generated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "detectedFromIp",
            ["short"] = "Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ip",
            ["short"] = "The IP address of the requester (when available)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["req"] = true,
            ["short"] = "The shame message tailored to the specified or detected country",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_shame_message",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "usa",
                      ["kind"] = "query",
                      ["name"] = "country",
                      ["orig"] = "country",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {
                  ["exist"] = {
                    "country",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
