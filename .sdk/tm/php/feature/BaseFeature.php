<?php
declare(strict_types=1);

// ShameAsAService SDK base feature

class ShameAsAServiceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ShameAsAServiceContext $ctx, array $options): void {}
    public function PostConstruct(ShameAsAServiceContext $ctx): void {}
    public function PostConstructEntity(ShameAsAServiceContext $ctx): void {}
    public function SetData(ShameAsAServiceContext $ctx): void {}
    public function GetData(ShameAsAServiceContext $ctx): void {}
    public function GetMatch(ShameAsAServiceContext $ctx): void {}
    public function SetMatch(ShameAsAServiceContext $ctx): void {}
    public function PrePoint(ShameAsAServiceContext $ctx): void {}
    public function PreSpec(ShameAsAServiceContext $ctx): void {}
    public function PreRequest(ShameAsAServiceContext $ctx): void {}
    public function PreResponse(ShameAsAServiceContext $ctx): void {}
    public function PreResult(ShameAsAServiceContext $ctx): void {}
    public function PreDone(ShameAsAServiceContext $ctx): void {}
    public function PreUnexpected(ShameAsAServiceContext $ctx): void {}
}
