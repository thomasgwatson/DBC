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
  p params
  event = Event.create(params)
  if ! event.valid?
    @event = event
    puts "This is inside the controller"
    p @event
    puts "This is inside the controller"
    p @event.errors.full_messages
    # p event.errors
    # @errors = event.errors.messages
    # p @errors
    erb :create
  else
    redirect '/'  
  end
  
end
