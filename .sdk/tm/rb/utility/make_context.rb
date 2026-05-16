# ShameAsAService SDK utility: make_context
require_relative '../core/context'
module ShameAsAServiceUtilities
  MakeContext = ->(ctxmap, basectx) {
    ShameAsAServiceContext.new(ctxmap, basectx)
  }
end
