module ApplicationHelper
  # Displays the user profile image using a variety of differents sizes an css style options
  def profile_image(size = :default, style = {}, user = current_user, profile_page = false)
    profile_style = "width: 100px; height: 100px;"
    profile_class = "profile-image img-circle circle-border m-b-md"
    case size.to_sym
    when :very_small
      profile_style = "width: 20px; height: 20px;"
      profile_class = "img-circle profile-image-small"
    when :small
      profile_style = "width: 60px; height: 60px; margin-top: -2px;"
    when :default
      profile_style = "width: 100px; height: 100px; float: none !important;"
    end

    profile_style += style.map{|k,v| " #{k}: #{v}"}.join(';')

    return image_tag(user.avatar.blank? ? "default_profile.jpg" : user.avatar.url,
                     alt: "profile", class: profile_class, style: profile_style) if size == :very_small

    if !current_user.blank? && user.id == current_user.id && profile_page
      # the user is logged in and inside the user profile page
      return link_to user_profile_path(user.username),
                     onclick: "$('#user_avatar').click(); event.preventDefault();",
                     onmouseover: "$(this).find('.user-profile-overlay').show();",
                     onmouseout: "$(this).find('.user-profile-overlay').hide();",
                     id: "user_avatar_link" do
        image_tag(user.avatar.blank? ? "default_profile.jpg" : user.avatar.url,
                  alt: "profile", class: profile_class, style: profile_style) +
        content_tag(:i, "", class: "fa fa-camera user-profile-overlay")
      end
    end

    # the user is not logged in or is not in the user profile page
    link_to image_tag(user.avatar.blank? ? "default_profile.jpg" : user.avatar.url,
                      alt: "profile", class: profile_class, style: profile_style),
            user_profile_path(user.username),
            id: "user_avatar_link"
  end
end
