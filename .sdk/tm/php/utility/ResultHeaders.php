<?php
declare(strict_types=1);

// ShameAsAService SDK utility: result_headers

class ShameAsAServiceResultHeaders
{
    public static function call(ShameAsAServiceContext $ctx): ?ShameAsAServiceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
