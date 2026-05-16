<?php
declare(strict_types=1);

// ShameAsAService SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ShameAsAServiceMakeContext
{
    public static function call(array $ctxmap, ?ShameAsAServiceContext $basectx): ShameAsAServiceContext
    {
        return new ShameAsAServiceContext($ctxmap, $basectx);
    }
}
