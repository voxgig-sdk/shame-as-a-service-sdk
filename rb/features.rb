# ShameAsAService SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ShameAsAServiceFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShameAsAServiceBaseFeature.new
    when "test"
      ShameAsAServiceTestFeature.new
    else
      ShameAsAServiceBaseFeature.new
    end
  end
end
