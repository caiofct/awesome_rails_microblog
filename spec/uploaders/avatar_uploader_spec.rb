describe AvatarUploader do

  let(:user) { FactoryGirl.create(:user_with_avatar) }

  before do
    AvatarUploader.enable_processing = true
  end

  after do
    AvatarUploader.enable_processing = false
  end

  it "has the thumb version" do
    expect(user.avatar.thumb).not_to be_nil
  end

  it "is stored in the correct path" do
    file_name = File.basename(user.avatar.url)
    expect(user.avatar.url).to eq "#{Rails.root}/spec/support/uploads/user/avatar/#{user.id}/#{file_name}"
  end
end
