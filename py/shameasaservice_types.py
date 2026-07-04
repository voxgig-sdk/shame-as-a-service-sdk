# Typed models for the ShameAsAService SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetShameMessage:
    country: str
    message: str
    detected_from_ip: Optional[bool] = None
    ip: Optional[str] = None


@dataclass
class GetShameMessageLoadMatch:
    country: Optional[str] = None
    detected_from_ip: Optional[bool] = None
    ip: Optional[str] = None
    message: Optional[str] = None

