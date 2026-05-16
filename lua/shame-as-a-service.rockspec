package = "voxgig-sdk-shame-as-a-service"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/shame-as-a-service-sdk.git"
}
description = {
  summary = "ShameAsAService SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["shame-as-a-service_sdk"] = "shame-as-a-service_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
