class Event < ActiveRecord::Base
  validates :title, :organizer_name, :organizer_email, :date, presence: true
  validates :title, uniqueness: true
  validates :organizer_email, format: { with: /\S{2,}@{1}\S{2,}.{1}\S{2,}/ }
end
