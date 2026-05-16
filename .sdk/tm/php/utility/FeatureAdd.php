<?php
declare(strict_types=1);

// ShameAsAService SDK utility: feature_add

class ShameAsAServiceFeatureAdd
{
    public static function call(ShameAsAServiceContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
