class Person < ActiveRecord::Base
  attr_accessible :height, :name, :weight
  audited
end
