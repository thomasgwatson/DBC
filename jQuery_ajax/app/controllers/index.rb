get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/color' do
  p "This suggests a successful post request has been made"
  #Create and return a JSON object with the random cell and color given below.
  if request.xhr?
    cell= rand(1..9)
    color= "#" + "%06x" % (rand * 0xffffff)
    content_type :json
    cell_color = {cell: cell, color: color}
    cell_color.to_json
  end
end
