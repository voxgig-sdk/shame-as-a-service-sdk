-- ShameAsAService SDK error

local json = require("dkjson")

local ShameAsAServiceError = {}
ShameAsAServiceError.__index = ShameAsAServiceError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function ShameAsAServiceError.new(code, msg, ctx)
  local self = setmetatable({}, ShameAsAServiceError)
  self.is_sdk_error = true
  self.sdk = "ShameAsAService"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function ShameAsAServiceError:context()
  return CONTEXT[self]
end


function ShameAsAServiceError:error()
  return self.msg
end


function ShameAsAServiceError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function ShameAsAServiceError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function ShameAsAServiceError:to_json()
  return json.encode(self:to_table())
end


function ShameAsAServiceError:__tostring()
  return self.msg
end


function ShameAsAServiceError.__tojson(self)
  return self:to_json()
end


return ShameAsAServiceError
