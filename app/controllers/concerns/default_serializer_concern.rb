module DefaultSerializerConcern
  extend ActiveSupport::Concern

  included do
    def self.default_serializer
      @_default_serializer
    end

    def self.default_serializer=(klass)
      @_default_serializer = klass
    end
  end

  def default_serializer
    self.class.default_serializer
  end

  # def render(options)
  #   if options[:json].respond_to?(:each)
  #     options = {each_serializer: default_serializer}.merge(options)
  #   else
  #     options = {serializer: default_serializer}.merge(options)
  #   end
  #   super(options)
  # end
end
