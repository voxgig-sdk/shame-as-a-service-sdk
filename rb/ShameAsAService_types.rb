# frozen_string_literal: true

# Typed models for the ShameAsAService SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetShameMessage entity data model.
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] detectedFromIp
#   @return [Boolean, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
GetShameMessage = Struct.new(
  :country,
  :detectedFromIp,
  :ip,
  :message,
  keyword_init: true
)

# Request payload for GetShameMessage#load.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] detectedFromIp
#   @return [Boolean, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
GetShameMessageLoadMatch = Struct.new(
  :country,
  :detectedFromIp,
  :ip,
  :message,
  keyword_init: true
)

