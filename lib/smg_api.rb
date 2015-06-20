class SmgApi
  attr_reader :url, :error, :session_id

  def initialize(username, password, url = nil)
    @error, @session_id = '', 0
    @url = url || 'https://smg.itechart-group.com/MobileServiceNew/MobileService.svc'
    @username = username
    @password = password
  end

  def user_valid?
    auth
    @error.empty? && @session_id != 0
  end

  private

  def auth
    uri = URI(@url + "/Authenticate?username=#{@username}&password=#{@password}")
    begin
      result = JSON.parse(uri_request(uri))
    rescue JSON::ParserError
      puts 'Unable to parse incoming SMG JSON'
      return nil
    end
    @error = result['ErrorCode']
    @session_id = result['SessionId']
    result
  end

  def uri_request(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_PEER
    request = Net::HTTP::Get.new(uri.request_uri)
    http.request(request).body
  end
end
