def path_to(page_name)
  case page_name

  when /the homepage/
    root_path
  when /the sign_up page/
    new_user_registration_path

  # Add more page name => path mappings here

  else
    raise "Can't find mapping from \"#{page_name}\" to a path."
  end
end
