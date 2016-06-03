require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do
  describe "bootstrap_class_for" do
    it "must use the correct boostrap class" do
      flash_type = "success"
      bootstrap_class = bootstrap_class_for(flash_type)
      expect(bootstrap_class).to eq "alert-success"

      flash_type = "error"
      bootstrap_class = bootstrap_class_for(flash_type)
      expect(bootstrap_class).to eq "alert-danger"

      flash_type = "alert"
      bootstrap_class = bootstrap_class_for(flash_type)
      expect(bootstrap_class).to eq "alert-warning"

      flash_type = "notice"
      bootstrap_class = bootstrap_class_for(flash_type)
      expect(bootstrap_class).to eq "alert-info"

      flash_type = "another"
      bootstrap_class = bootstrap_class_for(flash_type)
      expect(bootstrap_class).to eq "another"
    end
  end
end