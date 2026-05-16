# ShameAsAService SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ShameAsAServiceUtility.registrar = ->(u) {
  u.clean = ShameAsAServiceUtilities::Clean
  u.done = ShameAsAServiceUtilities::Done
  u.make_error = ShameAsAServiceUtilities::MakeError
  u.feature_add = ShameAsAServiceUtilities::FeatureAdd
  u.feature_hook = ShameAsAServiceUtilities::FeatureHook
  u.feature_init = ShameAsAServiceUtilities::FeatureInit
  u.fetcher = ShameAsAServiceUtilities::Fetcher
  u.make_fetch_def = ShameAsAServiceUtilities::MakeFetchDef
  u.make_context = ShameAsAServiceUtilities::MakeContext
  u.make_options = ShameAsAServiceUtilities::MakeOptions
  u.make_request = ShameAsAServiceUtilities::MakeRequest
  u.make_response = ShameAsAServiceUtilities::MakeResponse
  u.make_result = ShameAsAServiceUtilities::MakeResult
  u.make_point = ShameAsAServiceUtilities::MakePoint
  u.make_spec = ShameAsAServiceUtilities::MakeSpec
  u.make_url = ShameAsAServiceUtilities::MakeUrl
  u.param = ShameAsAServiceUtilities::Param
  u.prepare_auth = ShameAsAServiceUtilities::PrepareAuth
  u.prepare_body = ShameAsAServiceUtilities::PrepareBody
  u.prepare_headers = ShameAsAServiceUtilities::PrepareHeaders
  u.prepare_method = ShameAsAServiceUtilities::PrepareMethod
  u.prepare_params = ShameAsAServiceUtilities::PrepareParams
  u.prepare_path = ShameAsAServiceUtilities::PreparePath
  u.prepare_query = ShameAsAServiceUtilities::PrepareQuery
  u.result_basic = ShameAsAServiceUtilities::ResultBasic
  u.result_body = ShameAsAServiceUtilities::ResultBody
  u.result_headers = ShameAsAServiceUtilities::ResultHeaders
  u.transform_request = ShameAsAServiceUtilities::TransformRequest
  u.transform_response = ShameAsAServiceUtilities::TransformResponse
}
