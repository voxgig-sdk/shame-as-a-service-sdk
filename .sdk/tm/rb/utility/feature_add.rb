# ShameAsAService SDK utility: feature_add
module ShameAsAServiceUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
