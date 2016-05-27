module ApplicationHelper
  def display_flash_messages
    render "/layouts/messages"
  end

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

  def ldate(dt, format = :long)
    dt ? l(dt, format: format) : ""
  end

  def delete_path(object, use_icon = true)
    if use_icon
      content = "<i class='fa fa-trash'> <span class='icon-span'>Excluir</span></i>"
      link_class = "tool-tip"
    else
      content = 'Excluir'
      link_class = ""
    end
    link_to(content.html_safe, polymorphic_path(object), method: :delete, title: "Deletar",
    data: { confirm: t("confirm_delete") }, class: link_class)
  end

  def fa(image)
    "<i class='fa fa-#{image.to_s}'></i>".html_safe
  end
end
