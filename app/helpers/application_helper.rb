module ApplicationHelper
  # Displays the user profile image using a variety of differents sizes an css options
  def profile_image(size = :default, options = {}, user = current_user)

    profile_style = "width: 100px; height: 100px;"
    profile_class = "profile-image img-circle circle-border m-b-md"
    case size.to_sym
    when :very_small
      profile_style = "width: 20px; height: 20px;"
      profile_class = "img-circle profile-image-small"
    when :small
      profile_style = "width: 60px; height: 60px;"
    when :default
      profile_style = "width: 100px; height: 100px;"
    end

    profile_style += options.map{|k,v| " #{k}: #{v}"}.join(';')

    image_tag current_user.avatar.blank? ? "default_profile.jpg" : current_user.avatar.url,
              alt: "profile", class: profile_class, style: profile_style
  end
end
