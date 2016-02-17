Rails.application.routes.draw do
  resources :snippets, except: [:new, :edit]
  resources :tags, except: [:new, :edit]
  resources :bookmarks, except: [:new, :edit]
  namespace :api do
    namespace :v1 do
      resources :stories, except: [:new, :edit]
      resources :projects, except: [:new, :edit]
      resources :users, except: [:new, :edit]
    end
  end
end
