json.array!(@reviews) do |review|
  json.extract! review, :id, :comment, :management, :condition, :pest, :social
  json.url review_url(review, format: :json)
end
