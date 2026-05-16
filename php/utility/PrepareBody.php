<?php
declare(strict_types=1);

// ShameAsAService SDK utility: prepare_body

class ShameAsAServicePrepareBody
{
    public static function call(ShameAsAServiceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
