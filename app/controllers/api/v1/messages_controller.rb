class Api::V1::MessagesController < Api::V1::ApiController
  def index
    @random_message = Message.all.sample
    render json: @random_message
  end
end
