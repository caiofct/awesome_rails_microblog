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
//= require_tree .
//= require turbolinks

$(document).on("turbolinks:load", function() {
  setupComponents();
});

$.fn.preventMultipleClick = function (delay_duration) {
  delay_duration = delay_duration || 3000;
  var last_click_time_stamp = 0;
  var time_duration = 0;
  $(this).bind('click', function (event) {
   time_duration = last_click_time_stamp ? event.timeStamp - last_click_time_stamp : 0;
   //console.debug("preventMultipleClick", last_click_time_stamp, time_duration);
   if (time_duration && time_duration < delay_duration) {
     event.stopImmediatePropagation();
   } else {
     //console.debug("skip preventMultipleClick~");
     last_click_time_stamp = event.timeStamp;
   }
  });
};

function setupComponents() {
  // Adding support to summernote javascript text editor in the create
  // post field
  $('[data-provider="summernote"]').each(function(){
    if ($(this).find(".note-editable").length <= 0) {
      var text_field = $(this);
      $(this).summernote({
        lang: 'pt-BR',
        placeholder: $(text_field).attr('placeholder'),
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
    }
  });

  // Submitting the user form, especially to change the user avatar, when the file field changes
  $('#user_avatar').on("change", function(event){
    $('.simple_form.edit_user').submit();
  });
}
