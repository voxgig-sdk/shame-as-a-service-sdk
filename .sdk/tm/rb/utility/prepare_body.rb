# ShameAsAService SDK utility: prepare_body
require_relative 'media'
module ShameAsAServiceUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ShameAsAServiceUtilities.raw_body(ctx.reqdata) if ShameAsAServiceUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
