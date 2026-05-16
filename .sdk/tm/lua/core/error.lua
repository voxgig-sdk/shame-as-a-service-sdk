-- ShameAsAService SDK error

local ShameAsAServiceError = {}
ShameAsAServiceError.__index = ShameAsAServiceError


function ShameAsAServiceError.new(code, msg, ctx)
  local self = setmetatable({}, ShameAsAServiceError)
  self.is_sdk_error = true
  self.sdk = "ShameAsAService"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ShameAsAServiceError:error()
  return self.msg
end


function ShameAsAServiceError:__tostring()
  return self.msg
end


return ShameAsAServiceError
