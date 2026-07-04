<?php
declare(strict_types=1);

// Typed models for the ShameAsAService SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetShameMessage entity data model. */
class GetShameMessage
{
    public string $country;
    public ?bool $detected_from_ip = null;
    public ?string $ip = null;
    public string $message;
}

/** Match filter for GetShameMessage#load (any subset of GetShameMessage fields). */
class GetShameMessageLoadMatch
{
    public ?string $country = null;
    public ?bool $detected_from_ip = null;
    public ?string $ip = null;
    public ?string $message = null;
}

