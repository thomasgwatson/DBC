class Event < ActiveRecord::Base
  validates :title, :organizer_name, :organizer_email, :date, presence: true
  validates :title, uniqueness: true
  validates :organizer_email, format: { with: /\S{2,}@{1}\S{2,}.{1}\S{2,}/ }
  validate :event_date_cannot_be_in_past

  def event_date_cannot_be_in_past
    p date
    errors.add(:date, "can't be in the past") if date < Date.today
  end
end
