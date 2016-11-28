(function() {
  $(document).on('click', "[data-behaviour~=click_on_click]", function() {
    return $($(this).data('click-on-click-target')).click();
  });

  $(document).on('click', "[data-behaviour~=disable_input_on_click]", function() {
    return $($(this).data('disable-input-on-click-target')).prop('disabled', true);
  });

  $(document).on('click', "[data-behaviour~=enable_input_on_click]", function() {
    return $($(this).data('enable-input-on-click-target')).prop('disabled', false);
  });

  $(document).on('click', "[data-behaviour~=hide_on_click]", function() {
    return $($(this).data('hide-on-click-target')).hide();
  });

  $(document).on('click', "[data-behaviour~=show_on_click]", function() {
    return $($(this).data('show-on-click-target')).show();
  });

  $(document).on('input', "[data-behaviour~=submit_closest_form_on_input]", function() {
    return $(this).closest('form').submit();
  });

  $(document).on('change', "[data-behaviour~=submit_closest_form_on_change]", function() {
    return $(this).closest('form').submit();
  });

  $(document).on('click', "[data-behaviour~=submit_form_on_click]", function() {
    return $($(this).data('submit-form-on-click-target')).submit();
  });
}).call(this);
