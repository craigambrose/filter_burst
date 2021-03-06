defmodule FilterBurst.Router do
  use FilterBurst.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FilterBurst do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/login", PageController, :index
    get "/home", PageController, :index
    get "/who-owns-this", PageController, :index
    get "/.well-known/acme-challenge/BrnJQMR0_YgulKCHBx5w4WgzzU3f-h5_kLY6C83_xFg", PageController, :certbot
  end

  scope "/api", FilterBurst do
    pipe_through :api

    resources "/users", Api.UserController, only: [:create]
  end

  forward "/graphql", Absinthe.Plug, schema: FilterBurst.Schema
end
