json.extract! bookmark, :id, :url, :title, :created_at, :updated_at
json.url bookmark_url(bookmark, format: :json)
