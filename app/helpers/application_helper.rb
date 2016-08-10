module ApplicationHelper
  # Maps flash types in to bootstrap classes
  def bootstrap_class_for(flash_type)
    case flash_type
    when "success"
      "alert-success"
    when "error"
      "alert-danger"
    when "alert"
      "alert-warning"
    when "notice"
      "alert-info"
    else
      flash_type.to_s
    end
  end

  # Displays the user profile image using a variety of differents sizes an css style options
  def profile_image(size = :default, style = {}, user = current_user, profile_page = false, logger_user = current_user, from_model = false)
    profile_style = "width: 100px; height: 100px;"
    profile_class = "profile-image img-circle circle-border m-b-md"
    case size.to_sym
    when :very_small
      profile_style = "width: 20px; height: 20px;"
      profile_class = "img-circle profile-image-small"
    when :small
      profile_style = "width: 60px; height: 60px; margin-top: -2px;"
      profile_class = "profile-image img-circle circle-border"
    when :default
      profile_style = "width: 100px; height: 100px; float: none !important;"
    end

    profile_style += style.map{|k,v| " #{k}: #{v}"}.join(';')
    default_image = from_model ? user.avatar.default_url : "default_profile.jpg"
    user_avatar = user.avatar.blank? ? default_image : user.avatar.url(:thumb)

    return image_tag(user_avatar,
                     alt: "profile", class: profile_class, style: profile_style) if size == :very_small

    if !logger_user.blank? && user.id == logger_user.id && profile_page
      # the user is logged in and inside the user profile page
      return link_to user_profile_path(user.username),
                     onclick: "$('#user_avatar').click(); event.preventDefault();",
                     onmouseover: "$(this).find('.user-profile-overlay').css('display', 'inline-block');",
                     onmouseout: "$(this).find('.user-profile-overlay').hide();",
                     id: "user_avatar_link" do
        content_tag(:div,
                    content_tag(:i, "", class: "fa fa-camera user-profile-overlay"),
                    class: profile_class,
                    style: "background: url('#{user_avatar}') no-repeat; background-size: 100% 100%; margin: 0 auto 20px; #{profile_style}")
      end
    end

    # the user is not logged in or is not in the user profile page
    link_to image_tag(user_avatar,
                      alt: "profile", class: profile_class, style: profile_style),
            user_profile_path(user.username),
            id: "user_avatar_link"
  end
end
