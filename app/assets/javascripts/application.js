// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap-sprockets
//= require toastr_rails
//= require summernote
//= require summernote/locales/pt-BR
//= require turbolinks
//= require_tree .

$(document).on('ready page:load', function () {
  // Adding support to summernote javascript text editor in the create
  // post field
  $('[data-provider="summernote"]').each(function(){
    $(this).summernote({
      lang: 'pt-BR',
      placeholder: "O quê está acontecendo?",
      toolbar: false,
      height: '90px',
      maxHeight: '90px',
      minHeight: '90px',
      // On paste event to clear text formatting
      onpaste: function(e) {
        var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
        e.preventDefault();
        document.execCommand('insertText', false, bufferText);
      }
    });
  });

  // Sending user avatar when the file field changes
  $('#user_avatar').on("change", function(event){
    $('.simple_form.edit_user').submit();
  });
});
