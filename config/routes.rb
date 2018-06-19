Rails.application.routes.draw do
  resources :bookmarks

  get "/:slug" => "visit#index", as: :visit
  get '/crawl/:url' => "crawl#index", as: :crawl, constraints: { url: /.*/ }

  root to: "bookmarks#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
