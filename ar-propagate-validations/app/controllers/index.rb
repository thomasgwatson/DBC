get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
  erb :create
end

post '/events/create' do
  event = Event.create(params)
  if event.valid?
    p "this only prints if the event is valid?"
    {status: 'added', url: '/'}.to_json
  else
    content_type :json
    event.errors.messages.to_json
  end
end
