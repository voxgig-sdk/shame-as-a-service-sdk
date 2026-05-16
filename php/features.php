<?php
declare(strict_types=1);

// ShameAsAService SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ShameAsAServiceFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ShameAsAServiceBaseFeature();
            case "test":
                return new ShameAsAServiceTestFeature();
            default:
                return new ShameAsAServiceBaseFeature();
        }
    }
}
