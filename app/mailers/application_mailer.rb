class ApplicationMailer < ActionMailer::Base
  default from: 'no-reply@awesome-rails-microblog.com'
  layout 'mailer'
end
