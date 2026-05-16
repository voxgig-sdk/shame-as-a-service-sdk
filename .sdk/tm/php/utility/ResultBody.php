<?php
declare(strict_types=1);

// ShameAsAService SDK utility: result_body

class ShameAsAServiceResultBody
{
    public static function call(ShameAsAServiceContext $ctx): ?ShameAsAServiceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
