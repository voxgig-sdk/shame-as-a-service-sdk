-- Typed models for the ShameAsAService SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetShameMessage
---@field country string
---@field detectedFromIp? boolean
---@field ip? string
---@field message string

---@class GetShameMessageLoadMatch
---@field country? string

local M = {}

return M
