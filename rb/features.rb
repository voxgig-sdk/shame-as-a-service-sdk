# ShameAsAService SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ShameAsAServiceFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShameAsAServiceBaseFeature.new
    when "ratelimit"
      ShameAsAServiceRatelimitFeature.new
    when "retry"
      ShameAsAServiceRetryFeature.new
    when "test"
      ShameAsAServiceTestFeature.new
    when "timeout"
      ShameAsAServiceTimeoutFeature.new
    else
      ShameAsAServiceBaseFeature.new
    end
  end
end
