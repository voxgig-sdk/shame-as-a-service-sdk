<?php
declare(strict_types=1);

// ShameAsAService SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ShameAsAServiceUtility::setRegistrar(function (ShameAsAServiceUtility $u): void {
    $u->clean = [ShameAsAServiceClean::class, 'call'];
    $u->done = [ShameAsAServiceDone::class, 'call'];
    $u->make_error = [ShameAsAServiceMakeError::class, 'call'];
    $u->feature_add = [ShameAsAServiceFeatureAdd::class, 'call'];
    $u->feature_hook = [ShameAsAServiceFeatureHook::class, 'call'];
    $u->feature_init = [ShameAsAServiceFeatureInit::class, 'call'];
    $u->fetcher = [ShameAsAServiceFetcher::class, 'call'];
    $u->make_fetch_def = [ShameAsAServiceMakeFetchDef::class, 'call'];
    $u->make_context = [ShameAsAServiceMakeContext::class, 'call'];
    $u->make_options = [ShameAsAServiceMakeOptions::class, 'call'];
    $u->make_request = [ShameAsAServiceMakeRequest::class, 'call'];
    $u->make_response = [ShameAsAServiceMakeResponse::class, 'call'];
    $u->make_result = [ShameAsAServiceMakeResult::class, 'call'];
    $u->make_point = [ShameAsAServiceMakePoint::class, 'call'];
    $u->make_spec = [ShameAsAServiceMakeSpec::class, 'call'];
    $u->make_url = [ShameAsAServiceMakeUrl::class, 'call'];
    $u->param = [ShameAsAServiceParam::class, 'call'];
    $u->prepare_auth = [ShameAsAServicePrepareAuth::class, 'call'];
    $u->prepare_body = [ShameAsAServicePrepareBody::class, 'call'];
    $u->prepare_headers = [ShameAsAServicePrepareHeaders::class, 'call'];
    $u->prepare_method = [ShameAsAServicePrepareMethod::class, 'call'];
    $u->prepare_params = [ShameAsAServicePrepareParams::class, 'call'];
    $u->prepare_path = [ShameAsAServicePreparePath::class, 'call'];
    $u->prepare_query = [ShameAsAServicePrepareQuery::class, 'call'];
    $u->result_basic = [ShameAsAServiceResultBasic::class, 'call'];
    $u->result_body = [ShameAsAServiceResultBody::class, 'call'];
    $u->result_headers = [ShameAsAServiceResultHeaders::class, 'call'];
    $u->transform_request = [ShameAsAServiceTransformRequest::class, 'call'];
    $u->transform_response = [ShameAsAServiceTransformResponse::class, 'call'];
});
