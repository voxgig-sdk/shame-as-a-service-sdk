<?php
declare(strict_types=1);

// ShameAsAService SDK configuration

class ShameAsAServiceConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ShameAsAService",
                "slug" => "shame-as-a-service",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://shame-as-a-service.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_shame_message" => [],
                ],
            ],
            "entity" => [
        'get_shame_message' => [
          'fields' => [
            [
              'name' => 'country',
              'req' => true,
              'short' => 'The country code for which the shame message was generated',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'detectedFromIp',
              'short' => 'Whether the country was automatically detected from the IP address (true) or explicitly provided via query parameter (false)',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ip',
              'short' => 'The IP address of the requester (when available)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'req' => true,
              'short' => 'The shame message tailored to the specified or detected country',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_shame_message',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'usa',
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [
                    'exist' => [
                      'country',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ShameAsAServiceFeatures::make_feature($name);
    }
}
