// Typed models for the ShameAsAService SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetShameMessage {
  country: string
  detected_from_ip?: boolean
  ip?: string
  message: string
}

export type GetShameMessageLoadMatch = Partial<GetShameMessage>

