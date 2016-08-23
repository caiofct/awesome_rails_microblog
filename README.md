## Awesome Rails Microblog

A much simpler twitter clone.

## Features

The are two basic roles:

* Logged user
* Anonymous user

### The anonymous user can

* Create an account
* Sign in
* Sign out
* See a created profile
* See all the posts from another user profile page
* Search for an specific or all users

### A logged user can

* Create a post
* See the created posts
* Search for another users
* See another user profile alongside his posts
* Follow another user
* See on his home page all of his posts and the posts from the users that he is following
* See how much users he follows and how many users are following him
* Receive an email notification when another user follows him
* See his own profile page and change his profile image

## Basic dependencies

* Ruby 2.3.1
* Rails v5.0.0
* rspec-rails 3.5.0.beta3
* cucumber-rails 1.4.3

## How to run the unit tests

bundle exec rspec

## How to run the acceptance tests

bundle exec rails cucumber

## How to run the server on localhost

rails s
