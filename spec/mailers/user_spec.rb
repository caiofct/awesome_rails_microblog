require "rails_helper"

RSpec.describe UserMailer, type: :mailer do
  describe "followed_by_user" do
    let(:user) { FactoryGirl.create(:user) }
    let(:another_user) { FactoryGirl.create(:another_user) }
    let(:mail) { UserMailer.followed_by_user(user, another_user) }

    it "renders the headers" do
      expect(mail.subject).to eq("Você tem um novo seguidor")
      expect(mail.to).to eq([user.email])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("#{user.name},")
      expect(mail.body.encoded).to match("@#{another_user.username}")
    end
  end

end
