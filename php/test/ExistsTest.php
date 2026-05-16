<?php
declare(strict_types=1);

// ShameAsAService SDK exists test

require_once __DIR__ . '/../shameasaservice_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ShameAsAServiceSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
