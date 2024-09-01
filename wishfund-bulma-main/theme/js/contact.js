(function ($) {
  "use strict";

  var form = $("#contact-form"),
    message = $("#form-success-message"),
    form_data;

  // Success function
  function done_func(response) {
    message.fadeIn().removeClass("alert-danger").addClass("alert-success");
    message.find('.message-body').text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val("");
  }

  // Fail function
  function fail_func(data) {
    message.fadeIn().removeClass("alert-success").addClass("alert-danger");
    message.find('.message-body').text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form_data,
    })
      .done(done_func)
      .fail(fail_func);
  });
})(jQuery);
